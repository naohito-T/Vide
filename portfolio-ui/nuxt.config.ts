import { NuxtConfig } from '@nuxt/types';

const nuxtConfig: NuxtConfig = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  srcDir: 'src/',
  head: {
    title: 'portfolio-ui',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  // cross envでpackage.jsonから指定する場合にはenvを設定しないといけなかった
  env: {
    NODE_ENV: process.env.NODE_ENV ?? 'local'
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
    '@nuxtjs/style-resources'
  ],

  // 全コンポーネントファイルで変数を使えるようにするための設定
  styleResources: {
    scss: ['@/assets/scss/_variable.scss', '@/assets/sass/_mixin.scss']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isClient }) {
      if (isClient) {
        config.devtool = 'source-map';
      }
    },
    // トランスパイルについて
    // 1. 常に IE 9 までのトランスパイルと Polyfill の提供をしてくれる
    // →ブラウザ向けには IE 9 をターゲットにしたトランスパイルと Polyfill を提供してくれる
    // Nuxt.jsの場合、依存関係を変換するためにnuxt.config.jsに設定を追記しておく必要がある。
    // 2. node_modules/ 配下のモジュールはトランスパイルされない
    // node_modules/ 配下のモジュールはトランスパイルされません。
    // node_modules/ 配下のモジュールはトランスパイルされません。
    // トランスパイルしたい場合は、nuxt.config.js の build オプションを以下のように指定します。
    transpile: ['gsap']
  }
};

export default nuxtConfig;
