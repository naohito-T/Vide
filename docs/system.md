# System

## 機能要件

- nuxtはSSR
- SSRでのデプロイはCloud Functionを利用する
- firebase emulatorsが使用でき、localで実行できる
  - Cloud Function利用可能
  - Firestore利用可能
  - Authentication利用可能
- prettierで整形をかけられる(tsのみにするか、vueもかけるか。ただ保存時にかかっているな)

## ユニットテスト

Jestを使用する
ファイルの配置は同階層にtestディレクトリを作りその中に配置する。

単純なtsファイルtest
list2.test.ts
vueファイルtest
list2.vue.test.ts

## カバレッジ

portfolio-ui/coverageディレクトリに出力される
[参考にする](https://qiita.com/takasp/items/5864d0601c41a769a2a0)

---

## E2E

シナリオテストは
Playwrightで実行する(specファイル)

---

## Git Hooks

当リポジトリでは`lefthook`を使用している

```sh
$ lefthook version
0.7.7
```

## 非機能要件

## サイトマップ

```sh
Root (index)
└── /works (ピンタレストページ)
  └── /_id/work (3D carousel)
└── /about (自分について)
```
