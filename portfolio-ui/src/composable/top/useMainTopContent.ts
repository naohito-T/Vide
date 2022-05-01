import {
  onMounted,
  onUnmounted,
  ref,
  InjectionKey,
  ComponentInternalInstance,
  nextTick
} from '@nuxtjs/composition-api';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// @see https://8oo.jp/blog/39/
// @see https://liginc.co.jp/548232
export const useMainTopContent = (
  instance: ComponentInternalInstance | null
) => {
  // const mainEle = ref<Element | null>(null);
  onMounted(() => {
    // DOMが反映させるまで待機させる
    console.log('next 前');
    nextTick(() => {
      console.log('ページが完全に読み込まれました');
      console.log('next 後ろ');
      let sections = gsap.utils.toArray('.panel');
      gsap.registerPlugin(ScrollTrigger);

      console.log('next 後ろっd');
      console.log(`sections: ${JSON.stringify(sections)}`);
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
          // end: () => `+=${mainEle.value?.clientWidth}`
          end: () => `+=${mainEle.value?.clientWidth}`
        }
      });
    });
  });
  // onUnmounted(() => {
  //   gsap.killTweensOf('.panel');
  // });

  return {
    mainEle
  };
};

// type
export type UseMainTopContentType = ReturnType<typeof useMainTopContent>;
// key
export const UseMainTopContentTypeKey: InjectionKey<UseMainTopContentType> =
  Symbol('useMainTopContent');
