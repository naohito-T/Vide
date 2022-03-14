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
  //   // Import the functions you need from the SDKs you need
  // import { initializeApp } from "firebase/app";
  // import { getAnalytics } from "firebase/analytics";
  // // TODO: Add SDKs for Firebase products that you want to use
  // // https://firebase.google.com/docs/web/setup#available-libraries

  // // Your web app's Firebase configuration
  // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // const firebaseConfig = {
  //   apiKey: "AIzaSyDRe1DfU5ZEWAAux8wfe9TPniVotyzUKxM",
  //   authDomain: "vide-prd.firebaseapp.com",
  //   projectId: "vide-prd",
  //   storageBucket: "vide-prd.appspot.com",
  //   messagingSenderId: "476758564657",
  //   appId: "1:476758564657:web:5cd5016e95f8b372045a10",
  //   measurementId: "G-ZML4KF3YW4"
  // };

  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

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
