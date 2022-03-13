# Setup

## Project Setup

以下のツールが必用
`$ brew install direnv`
`$ brew install direnv`

## Project Start (local開発)

`$ (make env.decrypt ENV=xxx KEY=xxx)`
`$ direnv reload`
`$ make up`
`$ cd portfolio-ui; yarn dev`

## Deploy

firebase hostingを行っている
SSRするためにCloudFunctionを利用している(従量課金にアップグレードしないといけなかった)

```sh
# functions用のバンドルファイル作成
$ cd portfolio-ui
$ yarn build:functions

# hosting用のバンドルファイル作成
$ yarn build:hosting

# bundleファイル生成後、deploy実行
$ pwd

$ firebase deploy
```

