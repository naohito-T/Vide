/**
 * @desc ポイントは以下の通りです.最初にinitializeAppをimportしておくことインポート時はget<service名>というルールに統一し、getAuth()、getFirestore()のように関数として使うこと
 * これは、firebaseApp.auth()の様に名前空間とサービスのパターンに基づいて、全てのメソッドが含まれている中から必要なメソッドを使うよりも、 { getAuth, onAuthStateChanged } みたいに最初から個々の関数としてimportしたものを使った方が、バンドルサイズが小さくなるよねっていう考え方に基づくアプローチです。
 */

/**
 * @see https://zenn.dev/hiro__dev/articles/605161cd5a7875
 */

import { getApps } from 'firebase/app';
import {
  Firestore,
  getFirestore,
  connectFirestoreEmulator
} from 'firebase/firestore';
import { Auth, getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import {
  getStorage,
  FirebaseStorage,
  connectStorageEmulator
} from 'firebase/storage';
import { BaseFirebase } from '@/lib/helper/firebase';
import { FirebaseApps } from '@/lib/types';

/**
 * @memo localだとemulatorに切り替える
 */
export class FirebaseAPP extends BaseFirebase {
  // FireStore emulator
  private firestoreEmu(): Firestore {
    const emuFirestore = getFirestore();
    console.log('emu 通っている');
    if (!getApps().length) {
      // これ２回目はだめ
      console.log('emu 通っている2');
      connectFirestoreEmulator(emuFirestore, 'localhost', 8080);
    }
    return emuFirestore;
  }

  // Storage emulator
  private storageEmu(): FirebaseStorage {
    const emuStorage = getStorage();
    console.log('emu 通っている');
    if (!getApps().length) {
      // これ２回目はだめ
      console.log('emu 通っている2');
      connectStorageEmulator(emuStorage, 'localhost', 8080);
    }
    return emuStorage;
  }

  // Functions emulator
  private functionsEmu(): null {
    const emuFunctions = getFunctions();
    if (!getApps().length) {
      // これ２回目はだめ
      connectFunctionsEmulator(emuFunctions, 'localhost', 5001);
    }
    return null;
  }

  // Auth emulator
  private authEmu(): null {
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
  public get firestore(): Firestore {
    // return this.firestore
    return getFirestore(this.firebaseInitializeApp);
  }

  // pro
  public get firebaseAuth(): Auth {
    return getAuth(this.firebaseInitializeApp);
  }

  // pro
  public get firebaseStorage(): FirebaseStorage {
    return getStorage(this.firebaseInitializeApp);
  }

  /**
   * @desc projectで使用するfirebase群
   */
  public get firebaseApps(): FirebaseApps {
    return {
      firestore:
        this._runEnv === 'local' ? this.firestoreEmu() : this.firestore,
      storage:
        this._runEnv === 'local' ? this.storageEmu() : this.firebaseStorage
    };
  }
}
