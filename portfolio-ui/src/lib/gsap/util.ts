import { NullPointerError } from '@/lib/error';
import { TweenOptions } from '@/lib/types';

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
export const setOpaciy = (
  gsap: GSAP,
  selector: string,
  op?: TweenOptions
): gsap.core.Tween => {
  return gsap.set(selector, { autoAlpha: 0, ...op });
};

/**
 * @desc event時にtweenを適用
 */
export const clickListenereTween = (
  el: Element,
  event: string,
  gsap: GSAP,
  op: TweenOptions
) => {
  el.addEventListener(event, () => {
    return gsap.to(el, { ...op });
  });
};

/**
 * @desc gsap tips
 *       下からフワッとくるためには、yで100など下に配置し、toで0にするopacityをつければできる
 * https://yumegori.com/gsap-scrolltrigger
 * Timeline : Tweenを連結して、長い(複雑な)アニメーションを作れます
 */

/**
 * Effects
 * Effectsを使うとターゲットとconfigオブジェクトを引数に持つ間数にラップされたアニメーションを作成できる
 * https://qiita.com/takeshisakuma/items/97a7f702ec3c4f656525
 */
