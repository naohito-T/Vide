import { ApiWithoutToken } from '@/lib/helper/axios/_baseAxios';
import { RequestsHomeAPI } from '@/lib/api/request';
import { IRequestsHomeAPI } from '@/lib/api/service';
import { FirebaseAPP } from '@/lib/firebase';

interface IAPI {
  home: IRequestsHomeAPI;
}

class API {
  private home: IRequestsHomeAPI;

  constructor() {
    const firebase = new FirebaseAPP();
    console.log(`env${process.env.RUN_ENV}`);
    const firestore =
      process.env.RUN_ENV === 'local'
        ? firebase.firestoreEmu()
        : firebase.firestore;
    this.home = new RequestsHomeAPI(ApiWithoutToken(), firestore);
  }

  public get homeAPI() {
    return this.home;
  }
}

const ApiList = new API();
const api: IAPI = {
  home: ApiList.homeAPI
};

export { api };
