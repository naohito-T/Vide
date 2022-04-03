import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * @desc 対象の要素を横にスクロールさせる。
 */

/**
 * @desc デフォルトのeaseとアニメーションの長さ
 */
// gsap.defaults({ ease: 'power1.out', duration: 0.5})
// これで全てを変更することができる。
// 個別のtweenで継承falseにする必要がある。

const scrollHorizontally = (item: string | string[], x: number) => {
  gsap.to(item, {
    x: 400,
    scrollTrigger: {
      trigger: '.footer',
      start: 'top center', // 画面の中央が開始一
      toggleActions: 'play pause resume reset', // スクロールを戻したらもう一度開始させる
      markers: true
    }
  });
};

/**
 * @desc 回転させる
 */

/**
 * @desc gsapのtoとfromなどの汎用メソッドを作成する
 */

// gsap.to();
