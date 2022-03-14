import { FirebaseApp, initializeApp, getApps } from "firebase/app";
import { FirebaseConfig, IfirebaseParam } from "@/config";

export abstract class BaseFirebase {
  protected _runEnv: string;
  protected _firebaseConfig: FirebaseConfig;
  protected _firebase: FirebaseApp | undefined = undefined;

  constructor() {
    this._firebaseConfig = new FirebaseConfig();
    this._runEnv = this._firebaseConfig.getRunEnv;
  }

  get firebaseParam(): IfirebaseParam {
    return this._firebaseConfig.initializeConfigParam;
  }
}
