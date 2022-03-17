# Introduction

これを使う
[emulatorでNuxt & Cloud functionsの開発を速くする](https://qiita.com/sendaiharu1/items/07e7ab11fc0755f3cbe6)

## Project

Nuxt SSRの環境のため以下2つの開発パターンがある

1 `yarn dev`

必須
firebase function emulatorを起動してください。
Nuxt SSRのため、firebase functionを起動

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
