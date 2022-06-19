/**
 * @desc firebase 関連 Types
 */

import type { Firestore } from 'firebase/firestore';
import type { FirebaseStorage } from 'firebase/storage';
interface IfirebaseParam {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

interface FirebaseApps {
  firestore: Firestore;
  storage: FirebaseStorage;
}

export { IfirebaseParam, FirebaseApps };
