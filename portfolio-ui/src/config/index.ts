// export const firebaseSettings = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
//   measurementId: process.env.MESSAGING_SENDER_ID,
// };

import { BaseConfig } from "./_baseConfig";

/**
 * こっちはprocess.env系
 */
class AppConfig extends BaseConfig {}

class FirebaseConfig extends BaseConfig {
  get getRunEnv(): string {
    return this.runEnv;
  }

  get initializeConfigParam() {
    /**
     * @TODO ここでprivate のすべてを返す予定(ここでenv(emulators)を切り分ける)
     */

    return {};
  }
}

export { AppConfig, FirebaseConfig };
