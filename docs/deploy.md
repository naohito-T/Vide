# Deploy

当プロジェクトのdeploy方法を記す

## 留意

当プロジェクトはfirebase hostingを行っている
SSRするためにCloudFunctionを利用している（従量課金にアップグレードしないといけなかった）

```sh
# functions用のバンドルファイル作成
$ cd portfolio-ui
$ yarn build:pro:functions

# hosting用のバンドルファイル作成
$ yarn build:pro:hosting

# bundleファイル生成後、deploy実行
$ yarn deploy
```
