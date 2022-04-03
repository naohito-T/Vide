# Setup

## Project Setup

以下のツールが必用
`$ brew install direnv`
`$ brew install direnv`

## Project Start (local開発)

```sh
$(make env.decrypt ENV=xxx KEY=xxx)
$direnv reload
$make up
$cd portfolio-ui; yarn dev
```

## Project debug

VSCode内で実行できるようにしている。

[参考URL](https://blog.amay077.net/blog/2020/03/12/cddd1bbd158ea4e79647/)
プレークポイント(F9)をおき、F5を押せば実行される。

**注意点**
F5 でデバッグ開始できるようになりましたが、Shift + F5（あるいはメニュー -> Debug -> Stop Debugging）すると、ブラウザは閉じますが、バックグラウンドで動いているローカルサーバーは停止しません。
ファイル監視モードで常駐しているので放置でも問題ないですが、ちょっと気持ち悪いです。停止させるには Terminal で Ctrl+c しなければなりません。

## Deploy

firebase hostingを行っている
SSRするためにCloudFunctionを利用している(従量課金にアップグレードしないといけなかった)

```sh
# functions用のバンドルファイル作成
$ cd portfolio-ui
$ yarn build:pro:functions

# hosting用のバンドルファイル作成
$ yarn build:pro:hosting

# bundleファイル生成後、deploy実行
$ pwd

$ yarn deploy
```

## 静的解析及びフォーマットについて

prettierが用意されている。
対象ディレクトリは以下

```sh
functions/*
src/*
```


## package.json 各runコマンドについて

```json
"scripts": {
    // watchモードで現在のsrcファイル群を対象に起動する
    "dev": "cross-env NODE_ENV=\"local\" nuxt",
    // firebaseへ(本番)deployするコマンド
    "deploy": "firebase deploy",
    // nuxt buildでbundleされたファイルを試せるコマンド(対象が.nuxtディレクトリ内のファイル群)
    "start": "nuxt start",
    // nuxt SSGで完全静的ファイルを生成するコマンド(今回は不要かも)
    "generate": "nuxt generate",
    // prettierでフォーマットをかける
    "prettier": "prettier -w **/*.{js,ts}",
    // local用(firebase-emulatorsディレクトリに配置する)
    "build:local:functions": "cross-env NODE_ENV=\"local\" nuxt build && yarn build:local:copy:ssr",
    "build:local:copy:ssr": "rimraf ../firebase-emulators/functions/nuxt && mkdirp ../firebase-emulators/functions/nuxt && cp -R .nuxt/dist ../firebase-emulators/functions/nuxt/dist",
    "build:local:hosting": "cross-env NODE_ENV=\"local\" nuxt build && yarn build:local:copy:host",
    "build:local:copy:host": "rimraf ../firebase-emulators/public/* && mkdirp ../firebase-emulators/public/_nuxt && cp -R .nuxt/dist/client/ ../firebase-emulators/public/_nuxt",
    // Procduction用
    "build:pro:functions": "cross-env NODE_ENV=\"pro\" nuxt build && yarn build:pro:copy:ssr",
    "build:pro:copy:ssr": "rimraf functions/nuxt && mkdirp functions/nuxt && cp -R .nuxt/dist functions/nuxt/dist",
    "build:pro:hosting": "cross-env NODE_ENV=\"pro\" nuxt build && yarn build:pro:copy:host",
    "build:pro:copy:host": "rimraf public/* && mkdirp public/_nuxt && cp -R .nuxt/dist/client/ public/_nuxt"
  },
```
