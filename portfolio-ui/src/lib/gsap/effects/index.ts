/**
 * @desc Effects Utils
 *       gsapを渡せばglobalに登録されるはず(window)
 *       onUnmounted()で都度登録を外した方がパフォーマンスが良いのか？
 */

/**
 * @use
 */
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

interface FadeInType {
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
  fadeTransition: number;
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
        left: config.fadeTransition,
        autoAlpha: 1,
        duration: config.duration,
        scrollTrigger: {
          trigger: config.trigger,
          toggleActions: 'play reset resume reset',
          start: 'top center', // topとは、triggerとして設定した.containerのトップ部分を指していて、centerはブラウザ側の中央部分を指しています。
          end: config.end,
          invalidateOnRefresh: true
        }
      });
    },
    /** deafultでconfigに渡せる */
    defaults: { fadeTransition: 100, duration: 1, end: '+=500' }
  });
};

export const fadeInForTimeLine = (gsap: GSAP) => {
  gsap.registerEffect({
    name: 'fadeInForTimeLine',
    effect: (target: string, config: FadeInType) => {
      return gsap.to(target, {
        translateX: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: config.trigger,
          toggleActions: 'play reset resume reset',
          start: 'top center', // topとは、triggerとして設定した.containerのトップ部分を指していて、centerはブラウザ側の中央部分を指しています。
          end: config.end
        }
      });
    }
  });
};

// 右からフェードイン
export const fadeInFromRight = (gsap: GSAP) => {
  gsap.registerEffect({
    name: 'fadeInFromRight',
    effect: (target: string, config: FadeInType) => {
      return gsap.to(target, {
        right: config.fadeTransition,
        autoAlpha: 1,
        duration: config.duration,
        scrollTrigger: {
          trigger: config.trigger,
          toggleActions: 'play reset resume reset',
          start: 'top center', // topとは、triggerとして設定した.containerのトップ部分を指していて、centerはブラウザ側の中央部分を指しています。
          end: config.end,
          fastScrollEnd: true
        }
      });
    },
    defaults: { fadeTransition: 100, duration: 1, end: '+=500' }
  });
};

// 下からフェードイン
export const fadeInFromBottom = (gsap: GSAP) => {
  gsap.registerEffect({
    name: 'fadeInFromBottom',
    effect: (target: string, config: FadeInType) => {
      return gsap.to(target, {
        bottom: config.fadeTransition,
        autoAlpha: 1,
        duration: config.duration,
        scrollTrigger: {
          trigger: config.trigger,
          toggleActions: 'play reset resume reset',
          start: 'top center', // topとは、triggerとして設定した.containerのトップ部分を指していて、centerはブラウザ側の中央部分を指しています。
          end: config.end,
          fastScrollEnd: true
        }
      });
    },
    defaults: { fadeTransition: 100, duration: 1, end: '+=500' }
  });
};

// 上からフェードイン
export const fadeInFromTop = (gsap: GSAP) => {
  gsap.registerEffect({
    name: 'fadeInFromTop',
    effect: (target: string, config: FadeInType) => {
      return gsap.to(target, {
        top: config.fadeTransition,
        autoAlpha: 1,
        duration: config.duration,
        scrollTrigger: {
          trigger: config.trigger,
          toggleActions: 'play reset resume reset',
          start: 'top center', // topとは、triggerとして設定した.containerのトップ部分を指していて、centerはブラウザ側の中央部分を指しています。
          end: config.end,
          fastScrollEnd: true
        }
      });
    },
    defaults: { fadeTransition: 100, duration: 1, end: '+=500' }
  });
};

// その場でfadeIn
export const fadeInFromLocation = (gsap: GSAP) => {
  gsap.registerEffect({
    name: 'fadeInFromLocation',
    effect: (target: string, config: FadeInType) => {
      return gsap.to(target, {
        autoAlpha: 1,
        duration: config.duration,
        scrollTrigger: {
          trigger: config.trigger,
          toggleActions: 'play reset resume reset',
          start: 'top center', // topとは、triggerとして設定した.containerのトップ部分を指していて、centerはブラウザ側の中央部分を指しています。
          end: config.end,
          fastScrollEnd: true
        }
      });
    },
    defaults: { duration: 1, end: '+=500' }
  });
};

/** pin止める */
export const pinZoom = (gsap: GSAP) => {
  gsap.registerEffect({
    name: 'pinZoom',
    effect: (target: string, config: FadeInType) => {
      return gsap.to(target, {
        autoAlpha: 1,
        duration: config.duration,
        scrollTrigger: {
          pin: true,
          trigger: config.trigger,
          toggleActions: 'play reset resume reset',
          start: 'top center', // topとは、triggerとして設定した.containerのトップ部分を指していて、centerはブラウザ側の中央部分を指しています。
          end: config.end,
          fastScrollEnd: true
        }
      });
    },
    defaults: { duration: 1, end: '+=500' }
  });
};
