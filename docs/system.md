# System

nuxtをどの体制で整えるか

## System Integration

nuxtはSSRで対応する
色々検討した結果
eslintやprietterなどは自分で入れる
masonryを入れてピンタレストページを作る

## Root

今回は大きくしすぎない

```sh
Root
└── works (ピンタレストページ)
  └── work/_id (3D carousel)
└── about (自分について)
```

## System Setup

```sh
$ npx create-nuxt-app portfolio-ui
create-nuxt-app v4.0.0
✨  Generating Nuxt.js project in portfolio-ui
? Project name: portfolio-ui
? Programming language: TypeScript
? Package manager: Yarn
? UI framework: None
? Nuxt.js modules: Axios - Promise based HTTP client
? Linting tools: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Testing framework: None
? Rendering mode: Universal (SSR / SSG)
? Deployment target: Server (Node.js hosting)
? Development tools: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? What is your GitHub username? naohito-t
? Version control system: Git
```

