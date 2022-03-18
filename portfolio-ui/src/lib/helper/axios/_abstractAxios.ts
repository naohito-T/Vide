import { AxiosInstance } from 'axios';
import { Firestore } from 'firebase/firestore';

export abstract class RequestAPI {
  protected axios: AxiosInstance;
  protected db: Firestore;

  constructor(axios: AxiosInstance, db: Firestore) {
    this.axios = axios;
    this.db = db;
  }
}
