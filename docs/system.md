# System

## 機能要件

- nuxtはSSR
- SSRでのデプロイはCloud Functionを利用する
- firebase emulatorsが使用でき、localで実行できる
  - Cloud Function利用可能
  - Firestore利用可能
  - Authentication利用可能
- prettierで整形をかけられる(tsのみにするか、vueもかけるか。ただ保存時にかかっているな)
- 790以下からはSPスタイルとして表示する

## ユニットテスト

Jestを使用する
ファイルの配置は同階層にtestディレクトリを作りその中に配置する。

単純なtsファイルtest
list2.test.ts
vueファイルtest
list2.vue.test.ts

## カバレッジ

プルリクにはJestのカバレッジを必ず出力するようにしている。

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

---

## Git Repository 保護について

[参考URL](https://qiita.com/da-sugi/items/ba3cd83e64c689795c50)

## css

当リポジトリでは来たるLib Sass廃止を受け、Dart Sassを使用している。

## 非機能要件

## サイトマップ

```sh
Root (横スクロールpage)
└── /works (ピンタレストページ)
  └── /_id/work (3D carousel)
└── /about (自分について。下部にスキル一覧を表示)
```

---

## 運用

## portfolio フロントパッケージメンテナンス

手厚く動作確認を行わなければいけない

脆弱性チェックはlefthookでpush時に都度確認している。
脆弱性が発見された場合は都度更新する運用

発見されたパッケージ一括更新
`$ yarn upgrade`

対話型更新
`$ yarn upgrade-interactive`


上記で更新されないとき

[参考URL](https://rinoguchi.net/2021/11/npm-version-up-and-fix-audit.html)

---

---
