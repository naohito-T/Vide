import { NuxtConfig } from '@nuxt/types';

const RUN_ENV = process.env.NODE_ENV ?? 'local';
const SITE_URL =
  RUN_ENV === 'local'
    ? 'https://vide-prd.web.app/'
    : 'https://vide-prd.web.app/';

const nuxtConfig: NuxtConfig = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  srcDir: 'src/',
  head: {
    title:
      RUN_ENV !== 'local' ? 'Naohito-T | Portfolio' : 'Naohito-T | Portfolio',
    htmlAttrs: {
      lang: 'ja'
    },
    // デフォルトのOGが必要
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover'
      },
      {
        hid: 'description',
        name: 'description',
        content: "This is Naohito-T's portfolio."
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: "Naohito-T's portfolio"
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/favicon.ico'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: "This is Naohito-T's portfolio."
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@naohito-t'
      },
      {
        hid: 'msapplication-TileColor',
        property: 'msapplication-TileColor',
        content: '#00aba9'
      },
      {
        hid: 'theme-color',
        property: 'theme-color',
        content: '#ffffff'
      },
      { name: 'format-detection', content: 'telephone=no' },
      // https://rakuin.com/blog/html/?p=webapp_style
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      // { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
    ],

    noscript: [
      { innerHTML: 'JavaScriptが有効になっておりません。有効にしてください。' }
    ]
  },
  pwa: {
    meta: {
      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: 'black'
    },
    icon: {
      source: 'src/static/pwa/icon_pwa.png',
      fileName: 'icon_pwa.png'
    },
    manifest: {
      lang: 'ja',
      name: 'Portfolio',
      short_name: 'Portfolio',
      description: 'Naohito-T Portfolio.',
      display: 'standalone',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      orientation: 'portrait',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: '/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: '^https://polyfill.io/.*',
          handler: 'cacheFirst'
        },
        {
          urlPattern: `${SITE_URL}.*`,
          handler: 'staleWhileRevalidate',
          strategyOptions: {
            cacheName: 'site-cache'
          },
          strategyPlugins: [
            {
              use: 'Expiration',
              config: {
                maxAgeSeconds: 24 * 60 * 60 * 30
              }
            }
          ]
        }
      ]
    }
  },
  // cross envでpackage.jsonから指定する場合にはenvを設定しないといけなかった
  // またここで設定をしないとSSR時に展開されなくなる
  env: {
    NODE_ENV: RUN_ENV,
    API_KEY: process.env.API_KEY ?? '',
    AUTH_DOMAIN: process.env.AUTH_DOMAIN ?? '',
    PROJECT_ID: process.env.PROJECT_ID ?? '',
    STORAGE_BUCKET: process.env.STORAGE_BUCKET ?? '',
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID ?? '',
    APP_ID: process.env.APP_ID ?? '',
    MEASUREMENT_ID: process.env.MEASUREMENT_ID ?? ''
  },

  // 全pageに適用させるscssが必要な場合(aタグのhoverのイベントなど全ページ共通で定義したい場合)
  css: ['@/assets/scss/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '@/plugins/stores' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/pwa'
  ],

  // 全コンポーネントファイルで変数を使えるようにするための設定
  styleResources: {
    scss: ['@/assets/scss/_variable.scss', '@/assets/scss/_mixin.scss']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // カスタムローディング
  loading: '@/components/organisms/Loading.vue',

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config: any, ctx) {
      if (ctx.isClient) {
        config.devtool = 'source-map';
      }
      const svgRule = config.module.rules.find((rule: any) =>
        rule.test.test('.svg')
      );
      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        use: ['babel-loader', 'vue-svg-loader']
      });
    },
    // トランスパイルについて
    // 1. Nuxtは常に IE 9 までのトランスパイルと Polyfill の提供をしてくれる
    // →ブラウザ向けには IE 9 をターゲットにしたトランスパイルと Polyfill を提供してくれる
    // Nuxt.jsの場合、依存関係を変換するためにnuxt.config.jsに設定を追記しておく必要がある。
    // 2. node_modules/ 配下のモジュールはトランスパイルされない
    // node_modules/ 配下のモジュールはトランスパイルされません。
    // トランスパイルしたい場合は、nuxt.config.js の build オプションを以下のように指定します。
    transpile: ['gsap']
  }
};

export default nuxtConfig;
