<template>
  <div>
    <Header />
    <svg id="mainSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
      <defs>
        <filter id="glow" x="-100%" y="-100%" width="250%" height="250%">
          <feGaussianBlur stdDeviation="16" result="coloredBlur" />
          <feOffset dx="0" dy="0" result="offsetblur"></feOffset>
          <feFlood
            id="glowAlpha"
            flood-color="#0096E9"
            flood-opacity="0.4"
          ></feFlood>
          <feComposite in2="offsetblur" operator="in"></feComposite>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
        <line class="p" x1="0" x2="0" y1="0" y2="0" />
      </defs>
      <g filter="url(#glow)">
        <g id="wheel" />
      </g>
      <circle id="ring" cx="400" cy="300" r="150" />
    </svg>
    <SNSIcons />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api';
import Header from '@/components/organisms/Header.vue';
import SNSIcons from '@/components/organisms/VerticalSNSIcons.vue';
import { domSelect, domSelectAll } from '@/utils';
import { commonErrorHandler, NullPointerError } from '@/lib/error';

export default defineComponent({
  components: {
    Header,
    SNSIcons
  },
  setup() {
    onMounted(() => {
      const mainSVG = domSelect('#mainSVG');
      const wheel = domSelect('#wheel');
      const ring = domSelect('#ring');
      const numEmitters = 50;
      const numParticles = 6;
      const mainCircleRadius = 100;
      const step = 360 / numEmitters;
      const xmlns = 'http://www.w3.org/2000/svg';
      const emitterArr: any[] = [];
      const p = domSelect('.p');
      const emmitterTl = gsap.timeline();
      const offset = 60;
      const colorArr = ['#00E3FF', '#50E3C1', '#00819D', 'red', 'yellow'];

      gsap.set('svg', {
        visibility: 'visible'
      });

      gsap.set(ring, {
        attr: {
          r: mainCircleRadius
        }
      });
      const createEmitters = () => {
        for (let i = 0; i < numEmitters; i++) {
          const emitter = document.createElementNS(xmlns, 'g');
          const angle = step * i,
            point = {
              x: Math.cos((angle * Math.PI) / 180) * mainCircleRadius + 400,
              y: Math.sin((angle * Math.PI) / 180) * mainCircleRadius + 300
            };
          if (!emitter && !wheel) return;
          wheel.appendChild(emitter);

          gsap.set(emitter, {
            x: point.x,
            y: point.y
          });

          emitterArr.push(emitter);
          populateEmitter({ emitter: emitter, angle: angle });
          //gsap.delayedCall(i/20, populateEmitter, [{emitter: emitter, angle: angle}])
        }
      };
      const populateEmitter = (obj: any) => {
        //return;
        for (let i = 0; i < numParticles; i++) {
          if (!p) let clone = p.cloneNode(true);
          obj.emitter.appendChild(clone);
          gsap.set(clone, {
            attr: {
              y1: 0,
              y2: 'random(-2, -23)'
            },
            strokeWidth: 'random(0.5, 2)',
            stroke: colorArr[i % colorArr.length],
            transformOrigin: '50% 100%',
            rotation: obj.angle
          });
        }
      };

      const animateEmitters = () => {
        //return
        //console.log("animateEmitters();")
        for (let i = 0; i < numEmitters; i++) {
          //console.log(emitterArr.length)

          let angle = step * i;

          let tl = gsap.timeline();
          tl.fromTo(
            emitterArr[i].children,
            {
              x: 0,
              y: 0,
              attr: {
                y1: 0,
                y2: 'random(-2, -13)'
              }
            },
            {
              //duration: 'random(0.1, 0.3)',
              physics2D: {
                velocity: 'random(90, 500)',
                angle: `random(${angle + 85},${angle + 95})`,
                gravity: 0
              },
              attr: {
                y2: 0
              },
              repeat: -1,
              ease: 'expo.in',
              //strokeWidth: 0,
              //repeatDelay:0,
              repeatRefresh: true
            }
          );

          emmitterTl.add(tl, i / offset);
        }
      };

      createEmitters();

      let ringTl = gsap.timeline({ repeat: -1 });
      ringTl
        .from(ring, {
          drawSVG: '0% 0%',
          duration: (1 / offset) * numEmitters,
          ease: 'linear'
        })
        .to(ring, {
          drawSVG: '50% 50%',
          duration: (1 / offset) * numEmitters,
          ease: 'linear'
        });
      let snap = gsap.utils.snap(1);
      //console.log(colorArr[snap(gsap.utils.random(0, 5))])
      gsap.to(ring, {
        duration: 6,
        rotation: -360,
        repeat: -1,
        ease: 'linear',
        svgOrigin: '400 300'
      });
      gsap.to(ring, {
        stroke: function () {
          return gsap.utils.random(colorArr);
        },
        duration: 2,
        repeat: -1,
        ease: 'linear',
        repeatRefresh: true
      });

      animateEmitters();

      gsap.globalTimeline.timeScale(0.75).seek(100);
    });
  }
});
</script>

<style lang="scss" scoped>
svg {
  width: 100%;
  height: 100%;
  visibility: hidden;
}

.p {
  stroke: #00b0f8;
  stroke-width: 1px;
  /* stroke-linecap: round; */
  /* 	mix-blend-mode: overlay; */
}

#ring {
  fill: none;
  /* mix-blend-mode: overlay; */
  stroke-width: 2px;
  stroke: #00e3ff;
  stroke-linecap: round;
  /* stroke-dasharray: 12 4; */
}
</style>
