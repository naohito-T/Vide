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

  onMounted(async () => {
    // 子コンポーネントのDOMが反映させるまで待機させる(これがないとclient-onlyがきかない)
    await Promise.all([nextTick()]);
    /** ほんとはsectionsにも型をつけたい */
    let sections = gsap.utils.toArray('.panel');
    // GSAPでは、transform : translateX、transform : translateYの代わりに、X座標（x）、Y座標（y）、Xパーセント（xPercent）、Yパーセント（yPercent）を提供しています。
    /** topがWindow幅になるため、それをwindow幅にする */
    await gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.main',
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the main is so it feels more natural.
        anticipatePin: 1,
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
