import { ApiWithoutToken } from '@/lib/helper/axios/_baseAxios';
import { RequestsHomeAPI } from '@/lib/api/request';
import { IRequestsHomeAPI } from '@/lib/api/service';
import { FirebaseAPP } from '@/lib/firebase';
import { IAPI } from '@/lib/types';

class API {
  private readonly home: IRequestsHomeAPI;

  constructor(env: string = 'local') {
    console.log(`現在のenvは ${process.env.RUN_ENV}`);
    const firebases = new FirebaseAPP(env);
    this.home = new RequestsHomeAPI(ApiWithoutToken(), firebases.firebaseApps);
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
