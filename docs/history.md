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
[SSRをfirebaseにホスティングする](https://kosukesaigusa.com/tech/2021-07-22-nuxtjs-ssr-firebase-hosting/)

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

---

## Portfolio ディレクトリ(SSR ホストティング)

[参考URL](https://zenn.dev/kokota/articles/cd2aa18365aa91)


```sh
$ firebase init hosting

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  /Users/tanakanaohitoshi/work/product/github.com/github.com/naohito-T/Vide/portfolio-ui


=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: vide-prd (Vide-Prd)
i  Using project vide-prd (Vide-Prd)

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? dist
? Configure as a single-page app (rewrite all urls to /index.html)? No
? Set up automatic builds and deploys with GitHub? Yes
✔  Wrote dist/404.html
✔  Wrote dist/index.html

i  Detected a .git folder at /Users/tanakanaohitoshi/work/product/github.com/github.com/naohito-T/Vide
i  Authorizing with GitHub to upload your service account to a GitHub repository's secrets store.

Visit this URL on this device to log in:
https://github.com/login/oauth/authorize?client_id=89cf50f02ac6aaed3484&state=414968386&redirect_uri=http%3A%2F%2Flocalhost%3A9005&scope=read%3Auser%20repo%20public_repo

Waiting for authentication...

✔  Success! Logged into GitHub as naohito-T

? For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository) naohito-T
/Vide

✔  Created service account github-action-468357246 with Firebase Hosting admin permissions.
✔  Uploaded service account JSON to GitHub as secret FIREBASE_SERVICE_ACCOUNT_VIDE_PRD.
i  You can manage your secrets at https://github.com/naohito-T/Vide/settings/secrets.

? Set up the workflow to run a build script before every deploy? Yes
? What script should be run before every deploy? npm ci && npm run build

✔  Created workflow file /Users/tanakanaohitoshi/work/product/github.com/github.com/naohito-T/Vide/.github/workflows/firebase-hosting-pull-request.yml
? Set up automatic deployment to your site's live channel when a PR is merged? Yes
? What is the name of the GitHub branch associated with your site's live channel? main

✔  Created workflow file /Users/tanakanaohitoshi/work/product/github.com/github.com/naohito-T/Vide/.github/workflows/firebase-hosting-merge.yml

i  Action required: Visit this URL to revoke authorization for the Firebase CLI GitHub OAuth App:
https://github.com/settings/connections/applications/89cf50f02ac6aaed3484
i  Action required: Push any new workflow file(s) to your repo

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...
i  Writing gitignore file to .gitignore...

✔  Firebase initialization complete!
```

## できたJSONについて

```json
{
  "functions": {
    "functions": {
      "source": "functions"
    }
  },
  "hosting": {
    // "public": "static", publicをstaticにすることで画像などの静的ファイルがURL/ファイル名でアクセスできる
    "public": "public",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"]
  },
  "rewrites": [
    {
      "source": "**",
      "function": "ssr" // ここをfunctionsでexportしている関数名にするとHostingのURLから関数にアクセス可能になる。
    }
  ]
}
```
