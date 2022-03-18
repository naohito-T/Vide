import { FirebaseApp, initializeApp, getApps } from "firebase/app";
import { FirebaseConfig, IfirebaseParam } from "@/config";

/**
 * @desc Firebase Base Class : Firebase Configをnewし設定を注入
 */

export abstract class BaseFirebase {
  protected _firebaseConfig: FirebaseConfig;
  protected _firebase: FirebaseApp | null = null;

  constructor() {
    this._firebaseConfig = new FirebaseConfig();
    if (getApps().length < 1) {
      this._firebase = initializeApp(
        this._firebaseConfig.initializeConfigParam
      );
    }
  }

  /**
   * @return {FirebaseApp} 初期化されたFirebaseAppを返す
   */
  get firebaseInitializeApp(): FirebaseApp {
    if (!this._firebase) return this._firebase!;
    return this._firebase;
  }
}
