import { FirebaseApp, initializeApp, getApp, getApps } from 'firebase/app';
import { FirebaseConfig } from '@/config';
import {
  Firestore,
  getFirestore,
  connectFirestoreEmulator
} from 'firebase/firestore';

/**
 * @desc Firebase Base Class : Firebase Configをnewし設定を注入
 */

const firebaseConfig = new FirebaseConfig();
export abstract class BaseFirebase {
  protected readonly _runEnv: string;
  protected readonly _firebaseConfig: FirebaseConfig = firebaseConfig;
  protected readonly _firebase: FirebaseApp = initializeApp(
    this._firebaseConfig.initializeConfigParam
  );
  protected _firestore: Firestore = getFirestore();

  constructor(env: string) {
    if (!getApps().length) {
      this._firebase = initializeApp(
        this._firebaseConfig.initializeConfigParam
      );
    }
    this._runEnv = env;
  }

  /**
   * @return {FirebaseApp} 初期化されたFirebaseAppを返す
   */
  protected get firebaseInitializeApp(): FirebaseApp {
    return this._firebase;
  }
}
