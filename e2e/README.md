# Introduction

Videに対し、E2Eテストを行うツール

## やること

- CIの注入
- デプロイが終了後テスト、テストが終了次第、LINEに連絡をする
- 今回のフロントE2Eに関しては、要素にアニメーションが掛かっているかの確認
- ログインが必要などもないためど並行で良い
- 画像キャプチャも入れる

## 目的

Videのアップデートに伴い、**主要機能**が動作しているかE2Eテストを行うことで担保する

## Description

主要ファイル群は`test`ディレクトリ内
testディレクトリに関してはサイトマップで対応している。

```sh
test
├── about
│   └── about.spec.ts
├── skills
│   └── skills.spec.ts
├── top
│   └── top.spec.ts
└── works
    └── works.spec.ts
```

## Setup

ローカルで開発する際は下記手順での準備が必要。以下パッケージ群が準備されていることを前提とする。

Macの場合

```sh
# direnv install
$ brew install direnv
# 配布されているenvを復号(パスは担当者からもらってください) 以下はzshの場合
$ (make env.decrypt ENV=xxxxxxx)
# direnvを許可する
$ direnv allow
# node_module install
$ cd ./e2e; yarn install
```

---

## Test flow How To

作業者が変更することはとくになし。
envを読み込んだ後、適宜`$ yarn test:[環境]`で実行すれば対象の環境へテストします。

```sh
# alb projectを起動してください
$ make start-all

$ cd e2e-frontend/e2e

$ yarn test
```

---

## 各 Test コマンド 詳細

- UIを見ながらデバッグしたい時（package.json内で対象のenvにしてください）
  `$ yarn debug`

- コマンド実行（本番）
  `$ yarn test`
  → 実行後生成されたindex.htmlがそのままエビデンスとなります（提出する場合はこれを提出）

- Testテスト結果を自身でブラウザにて確認したい方は以下のコマンドを実行
  `$ yarn test:show`

- Utils Test
  `$ yarn test:jest`
