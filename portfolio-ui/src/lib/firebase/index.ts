/**
 * @desc ポイントは以下の通りです.最初にinitializeAppをimportしておくことインポート時はget<service名>というルールに統一し、getAuth()、getFirestore()のように関数として使うこと
 * これは、firebaseApp.auth()の様に名前空間とサービスのパターンに基づいて、全てのメソッドが含まれている中から必要なメソッドを使うよりも、 { getAuth, onAuthStateChanged } みたいに最初から個々の関数としてimportしたものを使った方が、バンドルサイズが小さくなるよねっていう考え方に基づくアプローチです。
 */

/**
 * @see https://zenn.dev/hiro__dev/articles/605161cd5a7875
 */

import { Firestore, getFirestore } from "firebase/firestore";
import "firebase/functions";
import "firebase/storage";
import { Auth, getAuth } from "firebase/auth";
import { BaseFirebase } from "@/lib/helper/firebase";
import { extend } from "vue/types/umd";

/**
 * @memo localだとemulatorに切り替える
 */

export class FirebaseAPP extends BaseFirebase {
  get firestore(): Firestore {
    return getFirestore(this._firebase);
  }
  get firebaseAuth(): Auth {
    return getAuth(this._firebase);
  }
}

// const firebaseConfig = {};

// const firebaseApp = initializeApp(firebaseConfig);

// const firestore = getFirestore(firebaseApp);
