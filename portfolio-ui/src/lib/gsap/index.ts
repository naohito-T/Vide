export * from './factory';
// export * from './setting';
export * from './effects';
export * from './tweens';
import { BaseGSAP } from '@/lib/helper/gsap';

export class AppGlobalGSAP extends BaseGSAP {
  public get getGSAP(): GSAP {
    return this.gsap;
  }
}
