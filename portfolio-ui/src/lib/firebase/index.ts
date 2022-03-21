/**
 * @desc ポイントは以下の通りです.最初にinitializeAppをimportしておくことインポート時はget<service名>というルールに統一し、getAuth()、getFirestore()のように関数として使うこと
 * これは、firebaseApp.auth()の様に名前空間とサービスのパターンに基づいて、全てのメソッドが含まれている中から必要なメソッドを使うよりも、 { getAuth, onAuthStateChanged } みたいに最初から個々の関数としてimportしたものを使った方が、バンドルサイズが小さくなるよねっていう考え方に基づくアプローチです。
 */

/**
 * @see https://zenn.dev/hiro__dev/articles/605161cd5a7875
 */

import { getApp, getApps, initializeApp, FirebaseApp } from 'firebase/app';
import {
  Firestore,
  getFirestore,
  connectFirestoreEmulator
} from 'firebase/firestore';
import { Auth, getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import { BaseFirebase } from '@/lib/helper/firebase';

/**
 * @memo localだとemulatorに切り替える
 */

// firebaseApps previously initialized using initializeApp()

export class FirebaseAPP extends BaseFirebase {
  // FireStore emulator
  firestoreEmu(): Firestore {
    const emuFirestore = getFirestore();
    console.log('emu 通っている');
    if (!getApps().length) {
      // これ２回目はだめ
      console.log('emu 通っている2');
      connectFirestoreEmulator(emuFirestore, 'localhost', 8080);
    }
    return emuFirestore;
  }

  // Functions emulator
  functionsEmu(): null {
    const emuFunctions = getFunctions();
    if (!getApps().length) {
      // これ２回目はだめ
      connectFunctionsEmulator(emuFunctions, 'localhost', 5001);
    }
    return null;
  }

  // Auth emulator
  authEmu(): null {
    const emuAuth = getAuth();
    if (!getApps().length) {
      // これ2回目はだめ
      connectAuthEmulator(emuAuth, 'localhost');
    }
    return null;
  }

  /**
   * @desc Productionに関してはhostingの設定でfunctionsには接続してくれる
   */

  // pro
  get firestore(): Firestore {
    return getFirestore(this.firebaseInitializeApp);
  }

  // pro
  get firebaseAuth(): Auth {
    return getAuth(this.firebaseInitializeApp);
  }
}
