# System Requirements

## 機能要件

- nuxtはSSR
- デプロイはFirebase Hostingを利用する
- SSRに関しては、バックエンドがないためCloud FunctionでSSRを担当する
- firebase emulatorsが使用でき、localで実行できる
  - Cloud Function利用可能
  - Firestore利用可能
  - Authentication利用可能
- prettierで整形をかけられる
- レスポンシブにする

## firebase emulators

当リポジトリではlocal開発で使用するためfirebase emulatorsを使用している

```sh
# 起動しているemulatorsとは別のターミナルを開き、以下コマンドを実行する
# firebase emulatorsのデータを出力先に出力する
$ firebase emulators:export ./data/

# Export されたデータを読み込んで Firestore エミュレータ起動
$ firebase emulators:start --import=./data --only firestore
```

## ユニットテスト

[Vue Test Utils Refarence](https://v1.test-utils.vuejs.org/ja/installation/testing-single-file-components-with-jest.html)

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

## E2E (WIP🏗)

シナリオテストは
Playwrightで実行する（specファイルが対象）

---

## Git Hooks

当リポジトリでは`lefthook`を使用している

```sh
$ lefthook version
0.7.7
```

lefthooksで作動しているのは以下の通り

```sh
# push時
prettierが走る
```

---

## Git Repository 保護について

[参考URL](https://qiita.com/da-sugi/items/ba3cd83e64c689795c50)

## css

当リポジトリでは来たるLib Sass廃止を受け**Dart Sass**を使用している。

## 各コンポーネントについて

基本atomic designを参考にし配置している。各ディレクトリの責務は以下の通り

```sh
├── atoms # 単体部品。振る舞いの変化はpropsのみ。emitするかどうかは要検討
├── molecules # atomsを組み合わせたものでlayoutする
├── organisms # ↑を組み合わせたもの & 外部接続を兼ね備えた & 単体でも動作する
├── parts # 各ドメインでしか使わないと判断されたもの(横断がない)
└── template # あくまで配置に徹する(上のpagesからfetch dataを注入しlayout配置に努める)
```

## スライドショーについて

当プロジェクトがSSRのためHooperを導入している


## サイトマップ

```sh
Root # (横スクロールpage)
└── /works # (ピンタレストページ)
  └── /_id # (3D carousel)
└── /about # (自分について。下部にスキル一覧を表示)
  └── /_id # (そのスキルについての作品及び説明) ← これはversion2で実践
```

## works page

作品集 Page

雑多なものを乗っけていく

- 構成
header
works gallery(ここをgifにした動画も入れる）
  works galleryに関しては、gsapとcanvas作品やthree.jsを乗っける。
footer

## about page

自分紹介Page

自分を構成するもの5つ作る
programing → GitHubに飛ばす

accesory → Nuageに飛ばす

美容blog → メンズ美容のブログを作らないといけない(服レビューもする)
技術blog → 技術blogに飛ばす(作らないといけない)

- 構成
header
top(スライドショー)
main(各紹介、スライドショーについて)
少し人物像
footer

## Loading Page

3種類に分ける
CSRの遷移 → nuxt.config.tsでカスタム設定

API接続 → storeで設定

index → どこかで分けられないか

---

## 非機能要件


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

## バンドルサイズの削減

[サイズ](https://dwango-js.github.io/performance-handbook/startup/reduce-size/)

---

---

やること
top pageを出たときにgsapをunMountedする
footerを作成
メンテナンスモード
recapthar v3を導入

## nuxt コンポーネント運用について

コンポーネント図で記載されている

## Style運用について

class : scss適用用
id : animation 用
ref : VueからのDOM参照用

```ts
<footer class="footer" ref="footer"> // これで参照できる
const footer = ref<Element | null>(null);
return { footer };
```


