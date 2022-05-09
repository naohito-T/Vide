import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export abstract class BaseGSAP {
  protected readonly gsap: typeof gsap;

  constructor() {
    this.gsap = gsap;
    gsap.registerPlugin(ScrollTrigger);
  }
}
