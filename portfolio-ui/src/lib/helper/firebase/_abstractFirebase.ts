import { FirebaseApp, initializeApp, getApp, getApps } from 'firebase/app';
import { FirebaseConfig } from '@/config';

/**
 * @desc Firebase Base Class : Firebase Configをnewし設定を注入
 */

export abstract class BaseFirebase {
  protected _firebaseConfig: FirebaseConfig;
  protected _firebase: FirebaseApp;

  constructor() {
    this._firebaseConfig = new FirebaseConfig();
    this._firebase = !getApps().length
      ? initializeApp(this._firebaseConfig.initializeConfigParam)
      : getApp();
  }

  /**
   * @return {FirebaseApp} 初期化されたFirebaseAppを返す
   */
  get firebaseInitializeApp(): FirebaseApp {
    return this._firebase;
  }
}
