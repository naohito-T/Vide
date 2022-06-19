import { AxiosInstance } from 'axios';
import { Config } from '@/config';
export abstract class RequestAPI {
  protected axios: AxiosInstance;

  protected config: Config;

  public constructor(axios: AxiosInstance) {
    this.axios = axios;
    this.config = new Config();
  }
}
