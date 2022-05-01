import { AxiosInstance } from 'axios';
import type { Firestore } from 'firebase/firestore';
import type { FirebaseStorage } from 'firebase/storage';
import type { FirebaseApps } from '@/lib/types';

export abstract class RequestAPI {
  protected readonly axios: AxiosInstance;
  protected readonly db: Firestore;
  protected readonly storage: FirebaseStorage;

  constructor(axios: AxiosInstance, firebaseAPP: FirebaseApps) {
    this.axios = axios;
    this.db = firebaseAPP.firestore;
    this.storage = firebaseAPP.storage;
  }
}
