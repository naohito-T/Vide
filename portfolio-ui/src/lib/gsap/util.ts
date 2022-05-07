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

gsap.registerEffect({
  name: 'animationHorizontal',
  default: { duration: 0.5 },
  effact: (targets: any, config: any) => {
    return gsap.to(targets, {
      duration: config.duration,
      ease: 'expo'
    });
  }
});

const img1 = document.querySelector('.img1');

const main = () => {
  gsap.registerEffect({
    name: 'animationHorizontal',
    effect: (targets: any, config: any) => {
      return gsap.to(targets, {
        duration: config.duration,
        x: 200,
        scale: 1.5,
        rotation: config.rotation,
        delay: config.delay,
        scrollTrigger: {
          trigger: '.footer',
          start: 'top center', // 画面の中央が開始一
          toggleActions: 'play pause resume reset', // スクロールを戻したらもう一度開始させる
          markers: true
        }
      });
    },
    defaults: { duration: 2, rotation: 180, delay: 0.2 }
  });

  // gsap.effects.imgAnimation(img1, { duration: 7 });
  // gsap.effects.imgAnimation('.img2', {
  //   duration: 5,
  //   rotation: 360,
  //   delay: 0.5
  // });
  // gsap.effects.imgAnimation('.img3', { duration: 3, rotation: 45, delay: 0.8 });
};

// const scrollHorizontally = (item: string | string[], x: number) => {
//   gsap.to(item, {
//     x: 400,

//   });
// };
