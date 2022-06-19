import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export abstract class BaseGSAP {
  protected readonly gsap: typeof gsap;

  /**
   * @desc Pluginを登録してからthis.gsapに入れる
   */
  constructor() {
    gsap.registerPlugin(ScrollTrigger);
    this.gsap = gsap;
  }
}
