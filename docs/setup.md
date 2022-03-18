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

2つの導線を用意している

1. Chromeを使う
[参考URL](https://qiita.com/ta1nakamura/items/0bf9db720f0728526d55)

```sh
$yarn debug

# そのあとブラウザで開く
```

2. vscode内で実行
[参考URL](https://blog.amay077.net/blog/2020/03/12/cddd1bbd158ea4e79647/)
プレークポイントをおき、F5を押せば実行される。

注意点
F5 でデバッグ開始できるようになりましたが、Shift + F5（あるいはメニュー -> Debug -> Stop Debugging）すると、ブラウザは閉じますが、バックグラウンドで動いているローカルサーバーは停止しません。
ファイル監視モードで常駐しているので放置でも問題ないですが、ちょっと気持ち悪いです。停止させるには Terminal で Ctrl+c しなければなりません。



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

$ yarn deploy
```

