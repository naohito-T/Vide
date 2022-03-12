// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// SSRモードはnodeサーバーが必要なので、firebaseにcloud functionを入れる必要があります。
// やってることはざっくりいうと、ルートにアクセスしたらレスボンスをそのままNuxtにレンダリングさせる。
// const {Nuxt} = require("nuxt-start");
// const functions = require("firebase-functions");
// const nuxtConfig = require('./nuxt.config.js');
import { Nuxt } from 'nuxt-start';
import * as functions from 'firebase-functions';
const nuxtConfig = require('./nuxt.config.js');

const config = {
  ...nuxtConfig,
  dev: false,
  debug: false,
  buildDir: 'nuxt',
};
const nuxt = new Nuxt(config);

exports.ssrapp = functions.https.onRequest(
  async (req: functions.https.Request, resp: functions.Response<any>) => {
    await nuxt.ready();
    nuxt.render(req, resp);
  }
);
