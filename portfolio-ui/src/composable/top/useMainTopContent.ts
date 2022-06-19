import {
  onMounted,
  onUnmounted,
  ref,
  InjectionKey,
  ComponentInternalInstance,
  nextTick
} from '@nuxtjs/composition-api';
import { AppGlobalGSAP } from '@/lib/gsap';
import { NullPointerError } from '@/lib/error';

export const useMainTopContent = (
  instance: ComponentInternalInstance | null
) => {
  if (!instance) {
    throw new NullPointerError('Not Context');
  }
  const mainEle = ref<HTMLElement | null>(null);
  const gsap = new AppGlobalGSAP().getGSAP;

  onMounted(() => {
    Promise.all([nextTick()]).then(() => {
      let sections = gsap.utils.toArray<HTMLElement>('.panel');
      // GSAPでは、transform : translateX、transform : translateYの代わりに、X座標（x）、Y座標（y）、Xパーセント（xPercent）、Yパーセント（yPercent）を提供しています。
      /** topがWindow幅になるため、それをwindow幅にする */
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '.main',
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (sections.length - 1),
            duration: 0.1
          },
          // pin機能を使うとき、スクロールが速すぎると画面の固定が遅れてページがガタつくことがありますが、これを指定しておくことで固定のタイミングがより早く検知されてガタつきを防ぐ効果があるそうです。
          anticipatePin: 1,
          invalidateOnRefresh: true,
          end: () => `+=${mainEle.value?.clientWidth}`
        }
      });
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
