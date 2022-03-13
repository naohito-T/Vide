import * as functions from 'firebase-functions';
import { Nuxt } from 'nuxt';

// 必用かも?
// const nuxtConfig = require('./nuxt.config.js');
// SSRモードはnodeサーバーが必要なので、firebaseにcloud functionを入れる必要があります。
// やってることはざっくりいうと、ルートにアクセスしたらレスボンスをそのままNuxtにレンダリングさせる。

const nuxt = new Nuxt({
  dev: true,
  debug: true,
  buildDir: 'nuxt',
});

export const ssr = functions.https.onRequest(
  async (req: functions.https.Request, resp: functions.Response<any>) => {
    await nuxt.ready();
    nuxt.render(req, resp);
  }
);
