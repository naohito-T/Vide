# History

作業のTipsを残す

## System reference

nuxtはSSRで対応する
色々検討した結果
eslintやprietterなどは自分で入れる
masonryを入れてピンタレストページを作る
[masonry](https://nori-life.com/vue-js-masonry/)
[JWTを使った今どきのSPA認証について](https://tech.hicustomer.jp/posts/modern-authentication-in-hosting-spa/)
[npm masonry](https://www.npmjs.com/package/vue-masonry)
[vue-masonry-wall](https://mebee.info/2020/09/26/post-14387/)
[Nuxt パフォーマンスチューニング](https://zenn.dev/sengosha/articles/6fcf1d0407fcd7)
[WebパフォーマンスとプロダクトKPIの相関を可視化する話 サイバーエージェント](https://developers.cyberagent.co.jp/blog/archives/9540/)


## System Setup

```sh
# Nuxt project
$ npx create-nuxt-app portfolio-ui
create-nuxt-app v4.0.0
✨  Generating Nuxt.js project in portfolio-ui
? Project name: portfolio-ui
? Programming language: TypeScript
? Package manager: Yarn
? UI framework: None
? Nuxt.js modules: Axios - Promise based HTTP client
? Linting tools: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Testing framework: None
? Rendering mode: Universal (SSR / SSG)
? Deployment target: Server (Node.js hosting)
? Development tools: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? What is your GitHub username? naohito-t
? Version control system: Git
```

```sh
# firebase emulator
bash-5.1# firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  /app

Before we get started, keep in mind:

  * You are initializing your home directory as a Firebase project directory
  * You are initializing within an existing Firebase project directory

? Which Firebase features do you want to set up for this directory? Press Space to select features, then Ente
r to confirm your choices. Emulators: Set up local emulators for Firebase products

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: vide-prd (Vide-Prd)
i  Using project vide-prd (Vide-Prd)

=== Emulators Setup
? Which Firebase emulators do you want to set up? Press Space to select emulators, then Enter to confirm your
 choices. Authentication Emulator, Functions Emulator, Firestore Emulator, Database Emulator, Hosting Emulato
r, Storage Emulator
i  Port for auth already configured: 9099
? Which port do you want to use for the functions emulator? 5001
i  Port for firestore already configured: 8080
? Which port do you want to use for the database emulator? 9000
? Which port do you want to use for the hosting emulator? 5000
? Which port do you want to use for the storage emulator? 9199
i  Emulator UI already enabled with port: 4000
? Would you like to download the emulators now? Yes
i  firestore: downloading cloud-firestore-emulator-v1.13.1.jar...
```

```sh
# firebase login
$ firebase login --no-localhost

# firebase init
$ firebase init

# firebaes start
$ firebase emulators:start
```

## firebase emulators:startについて

## データのexport / import

以下のコマンドでEmulator内のデータは出し入れできるため
基本的なデータを入れたらseedsをする。

export
`$ firebase emulators:export ./data/export_my_data -P default`

import
`$ firebase emulators:start -P default --import=./data/export_my_data`

## .config/configstore/

ホームディレクトリの .config/configstore/ へ認証情報が作られる
`$ firebase login --no-localhost`で作成された

## function設定

`$ firebase init`
Firestore と Emulators を選択

>Cloud FunctionsやHostingを起動するためにはそれぞれの初期化が必要となります

とのことのため
`$ cd ./firebase-emulators`
`$ firebase init functions`
とDockerに入ってではなく、実際に中に入らずlocalで叩いた
