import { FirebaseApp, initializeApp, getApps } from "firebase/app";
import { BaseConfig } from "./_baseConfig";

/**
 * こっちはprocess.env系
 */
class AppConfig extends BaseConfig {}

export interface IfirebaseParam {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

class FirebaseConfig extends BaseConfig {
  get initializeConfigParam(): IfirebaseParam {
    return {
      apiKey: process.env.API_KEY ?? "",
      authDomain: process.env.AUTH_DOMAIN ?? "",
      projectId: process.env.PROJECT_ID ?? "",
      storageBucket: process.env.STORAGE_BUCKET ?? "",
      messagingSenderId: process.env.MESSAGING_SENDER_ID ?? "",
      appId: process.env.APP_ID ?? "",
      measurementId: process.env.MEASUREMENT_ID ?? "",
    };
  }

  get getRunEnv(): string {
    return this.runEnv;
  }
}

export { AppConfig, FirebaseConfig };
