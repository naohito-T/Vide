# Introduction

これを使う
[emulatorでNuxt & Cloud functionsの開発を速くする](https://qiita.com/sendaiharu1/items/07e7ab11fc0755f3cbe6)

## Project

Nuxt SSRの環境のため以下2つの開発パターンがある

1 `yarn dev`

必須
**firebase emulator: functionを起動してください。**
Nuxt SSRのため必須

本番前の確認

2 `yarn start`

```sh
# functions用のバンドルファイル作成
$ cd portfolio-ui
$ yarn build:functions

# hosting用のバンドルファイル作成
$ yarn build:hosting

# bundleファイル生成後、deploy実行
$ pwd

$ yarn start
```

## SSR Tips

SSRでのconsole.logはターミナル上に
CSRでのconsole.logは検証に出力される

SSR時に、envを展開したい場合は`nuxt.config.ts.env`に記載しないといけない

`<client-only>`はシングルコンポーネント内全てを囲わないといけなそう
`<client-only>`内はrefで参照ができない。nextTickを使えばいい
