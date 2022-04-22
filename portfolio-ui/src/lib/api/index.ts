import { ApiWithoutToken } from '@/lib/helper/axios/_baseAxios';
import { RequestsHomeAPI } from '@/lib/api/request';
import { IRequestsHomeAPI } from '@/lib/api/service';
import { FirebaseAPP } from '@/lib/firebase';

interface IAPI {
  home: IRequestsHomeAPI;
}

class API {
  private readonly home: IRequestsHomeAPI;

  constructor(env: string = 'local') {
    console.log(`現在のenvは ${process.env.RUN_ENV}`);
    const firebase = new FirebaseAPP(env);
    const firestore =
      env === 'local' ? firebase.firestoreEmu() : firebase.firestore;
    this.home = new RequestsHomeAPI(ApiWithoutToken(), firestore);
  }

  public get homeAPI() {
    return this.home;
  }
}

/** 注入 */
const ApiList = new API(process.env.RUN_ENV);

const api: IAPI = {
  home: ApiList.homeAPI
};

export { api };
