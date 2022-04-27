import { BaseConfig } from './_base';

/**
 * @desc envまとめクラス
 */
export class Config extends BaseConfig {
  private FRONT_URL = process.env.FRONT_URL ?? '';

  /** 現状では送る必要はないとのこと */
  private TEAMS_URL = process.env.TEAMS_URL ?? '';

  /** @desc Authを除外したURL */
  public get frontURL(): string {
    return this.FRONT_URL;
  }
}
