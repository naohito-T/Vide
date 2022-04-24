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

/**
 * Skillsで使っている
 * @returns
 */
// export const createEmitters = () => {
//   for (let i = 0; i < numEmitters; i++) {
//     const emitter = document.createElementNS(xmlns, 'g');
//     const angle = step * i,
//       point = {
//         x: Math.cos((angle * Math.PI) / 180) * mainCircleRadius + 400,
//         y: Math.sin((angle * Math.PI) / 180) * mainCircleRadius + 300
//       };
//     if (!emitter && !wheel) return;
//     wheel.appendChild(emitter);

//     gsap.set(emitter, {
//       x: point.x,
//       y: point.y
//     });

//     emitterArr.push(emitter);
//     populateEmitter({ emitter: emitter, angle: angle });
//     //gsap.delayedCall(i/20, populateEmitter, [{emitter: emitter, angle: angle}])
//   }
// };

// const populateEmitter = (obj: any) => {
//   //return;
//   for (let i = 0; i < numParticles; i++) {
//     if (!p) let clone = p.cloneNode(true);
//     obj.emitter.appendChild(clone);
//     gsap.set(clone, {
//       attr: {
//         y1: 0,
//         y2: 'random(-2, -23)'
//       },
//       strokeWidth: 'random(0.5, 2)',
//       stroke: colorArr[i % colorArr.length],
//       transformOrigin: '50% 100%',
//       rotation: obj.angle
//     });
//   }
// };

// const animateEmitters = () => {
//   //return
//   //console.log("animateEmitters();")
//   for (let i = 0; i < numEmitters; i++) {
//     //console.log(emitterArr.length)

//     let angle = step * i;

//     let tl = gsap.timeline();
//     tl.fromTo(
//       emitterArr[i].children,
//       {
//         x: 0,
//         y: 0,
//         attr: {
//           y1: 0,
//           y2: 'random(-2, -13)'
//         }
//       },
//       {
//         //duration: 'random(0.1, 0.3)',
//         physics2D: {
//           velocity: 'random(90, 500)',
//           angle: `random(${angle + 85},${angle + 95})`,
//           gravity: 0
//         },
//         attr: {
//           y2: 0
//         },
//         repeat: -1,
//         ease: 'expo.in',
//         //strokeWidth: 0,
//         //repeatDelay:0,
//         repeatRefresh: true
//       }
//     );

//     emmitterTl.add(tl, i / offset);
//   }
// };
