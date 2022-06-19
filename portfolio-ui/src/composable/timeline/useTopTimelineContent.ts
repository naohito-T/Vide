import {
  onMounted,
  ComponentInternalInstance,
  nextTick
} from '@nuxtjs/composition-api';
import { AppGlobalGSAP } from '@/lib/gsap';
import { NullPointerError } from '@/lib/error';

export const useTopTimelineContent = (
  instance: ComponentInternalInstance | null
): void => {
  if (!instance) {
    throw new NullPointerError('Not Context');
  }
  onMounted(() => {
    Promise.all([nextTick()]).then(() => {
      const gsap = new AppGlobalGSAP().getGSAP;

      // gsap.utils.toArray<HTMLElement>('.js-parallax').forEach((wrap) => {
      //   const y = wrap.getAttribute('data-y') || -100;

      //   gsap.to(wrap, {
      //     y: y,
      //     scrollTrigger: {
      //       trigger: wrap,
      //       start: 'top bottom',
      //       end: 'bottom top',
      //       scrub: 0.5
      //       //markers: true
      //     }
      //   });
      // });

      const zoomArea = document.querySelector('.zoom');
      const panels = document.querySelectorAll('.pn50');
      const num = panels.length;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: zoomArea,
          start: 'top top',
          end: '+=2000',
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });

      panels.forEach((panel, i) => {
        gsap.set(panel, {
          zIndex: num - i
        });
      });

      gsap.set('.zoom-wrap_waku', {
        scale: 0.9
      });

      gsap.set('.pn51', {
        scale: 0,
        width: '75%',
        height: '50%',
        left: '12.5%',
        top: '25%'
      });

      gsap.set('.pn52', {
        scale: 0,
        width: '75%',
        height: '50%',
        left: '12.5%',
        top: '25%'
      });

      gsap.set('.pn53', {
        scale: 0,
        width: '75%',
        height: '50%',
        left: '12.5%',
        top: '25%'
      });

      gsap.set('.pn54', {
        scale: 0,
        width: '75%',
        height: '50%',
        left: '12.5%',
        top: '25%'
      });

      gsap.set('.pn55', {
        scale: 0,
        width: '100%',
        height: '75%',
        left: 0,
        top: '9.5%'
      });

      tl.to('.zoom-wrap_waku', { scale: 1.2, duration: 0.5 })
        .to(
          '.pn51',
          { scale: 1, left: '-37.5%', top: '5%', duration: 1 },
          '-=0.5'
        )
        .to('.pn51', { opacity: 0, duration: 0.2 }, '-=0.2')
        .to(
          '.pn52',
          { scale: 1, left: '62.5%', top: '55%', duration: 1 },
          '-=0.5'
        )
        .to('.pn52', { opacity: 0, duration: 0.2 }, '-=0.2')
        .to('.pn53', { scale: 1, duration: 1 }, '-=0.5')
        .to('.pn53', { opacity: 0, duration: 0.2 }, '-=0.2')
        .to('.pn54', { scale: 1, duration: 1 }, '-=0.5')
        .to('.pn54', { opacity: 0, duration: 0.2 }, '-=0.2')
        .to('.pn55', { scale: 1, duration: 1 }, '-=0.5');
    });
  });
};
