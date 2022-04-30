import {
  onMounted,
  onUnmounted,
  ref,
  InjectionKey
} from '@nuxtjs/composition-api';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// @see https://8oo.jp/blog/39/
// @see https://liginc.co.jp/548232
export const useMainTopContent = () => {
  const mainEle = ref<Element | null>(null);
  onMounted(() => {
    if (!mainEle.value) {
      return '';
    }
    gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray('.panel');
    // GSAPでは、transform : translateX、transform : translateYの代わりに、X座標（x）、Y座標（y）、Xパーセント（xPercent）、Yパーセント（yPercent）を提供しています。
    /** topがWindow幅になるため、それをwindow幅にする */
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.main',
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the main is so it feels more natural.
        anticipatePin: 1,
        // end: '+=3500'
        end: () => `+=${mainEle.value?.clientWidth}`
      }
    });
  });
  onUnmounted(() => {
    gsap.killTweensOf('.panel');
  });

  return {
    mainEle
  };
};

// type
export type UseMainTopContentType = ReturnType<typeof useMainTopContent>;
// key
export const UseMainTopContentTypeKey: InjectionKey<UseMainTopContentType> =
  Symbol('useMainTopContent');
