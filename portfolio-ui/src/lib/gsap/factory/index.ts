/**
 * @desc gsap詳しい
 * @see https://yumegori.com/gsap-scrolltrigger
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TweenOptions } from '@/lib/types';
import { addClassName, removeClassName } from '@/utils';

gsap.registerPlugin(ScrollTrigger);
// toggleClass()」は、対象となる要素のclass属性値を追加したり削除したりを繰り返すことが可能なメソッド

/**
 * @desc document.queryなどで取得した際用のtweenFactory
 */
export const generateTweenHtml = (
  el: HTMLElement | null,
  op: TweenOptions
): gsap.core.Tween | null => {
  if (!el) return null;
  return gsap.to(el, { ...op });
};

/**
 * @desc gsap.utils.toArray('.animation');などで取得したunknown用
 */
export const generateTweenUnknown = (
  el: unknown[] | null,
  op: TweenOptions
): gsap.core.Tween | null => {
  if (!el) return null;
  return gsap.to(el, { ...op });
};

export const setAnimation = (selector: string) => {
  gsap.set(selector, { autoAlpha: 0 });
  const a = gsap.to(selector, {
    // autoAlpha: 1,

    // backgroundColor: 'aqua',
    // duration: 2,
    scrollTrigger: {
      trigger: selector,
      // pin: true,
      start: 'top center', // 画面の中央が開始一
      toggleActions: 'play pause none reset', // スクロールを戻したらもう一度開始させる
      markers: true
    },
    onComplete: () => {}
  });
  return a;
};

/**
 * @desc 特定のscroll値でclassを付与したい場合
 */
export const setScrollWithAddClass = (
  selector: Element | null,
  className: string
) => {
  const tween = gsap.to(selector, {
    scrollTrigger: {
      trigger: selector,
      start: 'top center', // 画面の中央が開始一
      toggleActions: 'play pause none reset', // スクロールを戻したらもう一度開始させる
      markers: true
    },
    onRepeat: () => removeClassName(selector, className),
    onComplete: () => addClassName(selector, className)
  });
  return tween;
};

export const timeLine = () => {
  ScrollTrigger.create({
    trigger: '#footer',
    start: 'top 50%',
    toggleClass: 'is-crossed'
  });

  const bottomTl = gsap.timeline({
    scrollTrigger: {
      trigger: '#footer',
      start: 'top bottom',
      end: 'center center',
      scrub: 1
    }
  });
  return bottomTl;
};
