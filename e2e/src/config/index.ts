import { BaseConfig } from './_base';

/**
 * @desc envまとめクラス
 */
export class Config extends BaseConfig {
  private FRONT_URL = Config.generateRunFrontURL(this.runEnv);

  /** lINEに変更する */
  private TEAMS_URL = process.env.TEAMS_URL ?? '';

  private TEST_DIR = `${process.cwd()}/src/tests/image`;

  public get frontURL(): string {
    return this.FRONT_URL;
  }

  public get testDir(): string {
    return this.TEST_DIR;
  }

  private static generateRunFrontURL(runEnv: string): string {
    switch (runEnv) {
      case 'local':
        return '';
      case 'pro':
        return 'https://vide-prd.web.app/';
      default:
        return 'https://vide-prd.web.app/';
    }
  }
}
