import { NullPointerError } from '@/lib/error';

export const getTweenArray = (gsap: GSAP, selector: string) => {
  const tweens = gsap.utils.toArray(selector);
  if (tweens.length <= 0) {
    throw new NullPointerError('selectorが取得できませんでした。');
  }
  return tweens;
};

/** @desc 特定オブジェクトの全てのトゥイーンをkill */
export const killTweens = (gsap: GSAP, selector: string): void => {
  gsap.killTweensOf(selector);
};

/** @desc 対象のtweenを削除 */
export const killTween = (tween: gsap.core.Tween) => {
  tween.kill();
};

/**
 * @desc 初期状態としてopacity: 0;とvisibility: hidden;が指定される
 * @use  to methodで autoAlpha: 1, //opacity: 1;とvisibility：visible;
 */
export const setOpaciy = (gsap: GSAP, selector: string): gsap.core.Tween => {
  return gsap.set(selector, { autoAlpha: 0 });
};
