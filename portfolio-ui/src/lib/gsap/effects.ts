import { gsap } from 'gsap';

// const img1 = document.querySelector('.img1');

export const hoverEffect = (): void => {
  gsap.registerEffect({
    name: 'hoverAction',
    effect: (targets: string, config: any) => {
      return gsap.to(targets, {
        duration: config.duration,
        y: 200,
        scale: 1.5,
        rotation: config.rotation,
        delay: config.delay
      });
    },
    defaults: { duration: 2, rotation: 180, delay: 0.2 }
  });
};

// 使用方法
// gsap.effects.imgAnimation(img1, { duration: 10 });
// gsap.effects.imgAnimation('.img2', { duration: 5, rotation: 360, delay: 0.5 });
// gsap.effects.imgAnimation('.img3', { duration: 3, rotation: 45, delay: 0.8 });
