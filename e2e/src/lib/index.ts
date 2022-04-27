import { ApiWithBaseAxios } from '@/lib/_base';
import { IRequestSystemAPI } from '@/lib/system';
import { RequestSystem } from '@/lib/request';

export interface API {
  service: IRequestSystemAPI;
}

const service = new RequestSystem(ApiWithBaseAxios());

export const api: API = {
  service,
};
