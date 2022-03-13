import { ApiWithoutToken } from "@/lib/helper/axios/_baseAxios";
import { RequestsHomeAPI } from "@/lib/api/request";
import { IRequestsHomeAPI } from "@/lib/api/service";

interface IAPI {
  home: IRequestsHomeAPI;
}

class API {
  private home: IRequestsHomeAPI;

  constructor() {
    this.home = new RequestsHomeAPI(ApiWithoutToken());
  }

  public get homeAPI() {
    return this.home;
  }
}

const api: IAPI = {
  home: new API().homeAPI,
};

export { api };
