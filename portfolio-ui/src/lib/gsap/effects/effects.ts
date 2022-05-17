// import { gsap } from 'gsap';

// const img1 = document.querySelector('.img1');

// export const hoverEffect = (): void => {
//   gsap.registerEffect({
//     name: 'hoverAction',
//     effect: (targets: string, config: any) => {
//       return gsap.to(targets, {
//         duration: config.duration,
//         y: 200,
//         scale: 1.5,
//         rotation: config.rotation,
//         delay: config.delay
//       });
//     },
//     defaults: { duration: 2, rotation: 180, delay: 0.2 }
//   });
// };

// 使用方法
// gsap.effects.imgAnimation(img1, { duration: 10 });
// gsap.effects.imgAnimation('.img2', { duration: 5, rotation: 360, delay: 0.5 });
// gsap.effects.imgAnimation('.img3', { duration: 3, rotation: 45, delay: 0.8 });

/**
 * @desc gsapをもらう形で登録するか
 */

interface FadeInType {
  left: number;
  duration: number;
  trigger: string;
  end: string;
}

// 左からフェードイン
export const fadeInFromLeft = (gsap: GSAP) => {
  gsap.registerEffect({
    name: 'fadeInFromLeft',
    effect: (target: string, config: FadeInType) => {
      return gsap.to(target, {
        left: config.left,
        autoAlpha: 1,
        duration: config.duration,
        scrollTrigger: {
          // trigger: '.fade',
          trigger: config.trigger,
          toggleActions: 'play reset resume reset',
          start: 'top center', // topとは、triggerとして設定した.containerのトップ部分を指していて、centerはブラウザ側の中央部分を指しています。
          end: config.end
        }
      });
    },
    defaults: { left: 100, duration: 1, end: '+=500' }
  });
};

// もともと
// return gsap.to(target, {
//   left: 100,
//   autoAlpha: 1,
//   duration: 1,
//   scrollTrigger: {
//     trigger: '.fade',
//     toggleActions: 'play reset resume reset',
//     start: 'top center', // topとは、triggerとして設定した.containerのトップ部分を指していて、centerはブラウザ側の中央部分を指しています。
//     end: '+=500'
//   }
// });
