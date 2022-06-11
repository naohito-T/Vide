export * from './factory';
// export * from './setting';
export * from './tweens';
export * from './util';
export * from './effects';

import { BaseGSAP } from '@/lib/helper/gsap';

export class AppGlobalGSAP extends BaseGSAP {
  public get getGSAP(): GSAP {
    return this.gsap;
  }
}

/**
 * @tips
 *
 * https://qiita.com/takeshisakuma/items/97a7f702ec3c4f656525
 * https://devsakaso.com/gsap-keyframes/
 * https://hibi-update.org/javascript/gsap3/
 * [scroll trigar]https://yumegori.com/gsap-scrolltrigger
 */
