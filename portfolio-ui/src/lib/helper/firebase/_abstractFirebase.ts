import { FirebaseApp, initializeApp } from "firebase/app";
import { FirebaseConfig } from "@/config";

export abstract class BaseFirebase {
  protected _firebase: FirebaseApp;

  constructor() {
    const config = new FirebaseConfig();
    this._firebase = initializeApp(config.initializeConfigParam);
  }
}
