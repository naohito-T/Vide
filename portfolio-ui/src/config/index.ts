// export const firebaseSettings = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
//   measurementId: process.env.MESSAGING_SENDER_ID,
// };

/**
 * こっちはprocess.env系
 */
class Config {}

class FirebaseConfig {
  get initializeConfigParam() {
    /**
     * @TODO ここでprivate のすべてを返す予定(ここでenv(emulators)を切り分ける)
     */

    return {};
  }
}

export { Config, FirebaseConfig };
