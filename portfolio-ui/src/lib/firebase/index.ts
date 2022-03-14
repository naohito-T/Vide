/**
 * @desc ポイントは以下の通りです.最初にinitializeAppをimportしておくことインポート時はget<service名>というルールに統一し、getAuth()、getFirestore()のように関数として使うこと
 * これは、firebaseApp.auth()の様に名前空間とサービスのパターンに基づいて、全てのメソッドが含まれている中から必要なメソッドを使うよりも、 { getAuth, onAuthStateChanged } みたいに最初から個々の関数としてimportしたものを使った方が、バンドルサイズが小さくなるよねっていう考え方に基づくアプローチです。
 */

/**
 * @see https://zenn.dev/hiro__dev/articles/605161cd5a7875
 */

import { getApps, initializeApp, FirebaseApp } from "firebase/app";
import {
  Firestore,
  getFirestore,
  connectFirestoreEmulator,
} from "firebase/firestore";
import { Auth, getAuth, connectAuthEmulator } from "firebase/auth";
import { BaseFirebase } from "@/lib/helper/firebase";

/**
 * @memo localだとemulatorに切り替える
 */

// firebaseApps previously initialized using initializeApp()

export class FirebaseAPP extends BaseFirebase {
  // emulator
  firestoreEmu(): void {
    const emuFirestore = getFirestore();
    connectFirestoreEmulator(emuFirestore, "localhost", 8080);
  }

  // emulator
  authEmu(): void {
    const emuAuth = getAuth();
    connectAuthEmulator(emuAuth, "localhost");
  }

  // pro
  get firestore(): Firestore {
    if (getApps().length < 1) {
      this._firebase = initializeApp(
        this._firebaseConfig.initializeConfigParam
      );
    }
    return getFirestore(this._firebase);
  }

  // pro
  get firebaseAuth(): Auth {
    if (getApps().length < 1) {
      this._firebase = initializeApp(
        this._firebaseConfig.initializeConfigParam
      );
    }
    return getAuth(this._firebase);
  }
}
