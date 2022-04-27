# Introduction

Videに対し、E2Eテストを行うツール

## 目的

Videのアップデートに伴い、**主要機能**が動作しているかE2Eテストを行うことで担保する

## Description

主要ファイル群は`tests`ディレクトリ内
tests/pages/ディレクトリに関してはサイトマップで対応している。
testフローに関しては同一パス群でまとめた

```sh
├── index.ts # BasePage Object
├── regist # 新規登録に関してはとくにpathがない
│   └── registPage.ts
└── user
    ├── address
    │   └── index.ts
    └── index.ts
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
