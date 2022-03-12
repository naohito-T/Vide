const functions = require("firebase-functions");
const { Nuxt } = require("nuxt");
const nuxt = new Nuxt({
  dev: false,
  debug: false,
  buildDir: 'nuxt',
});

exports.ssr = functions.https.onRequest(async (req, res) => {
  // リクエストをNuxt.jsでルーティング、レンダリングしレスポンスを返す
  await nuxt.ready();
  return nuxt.render(req, res);
});
