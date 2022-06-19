import {
  onMounted,
  ComponentInternalInstance,
  nextTick
} from '@nuxtjs/composition-api';
import { AppGlobalGSAP, fadeInForTimeLine } from '@/lib/gsap';
import { NullPointerError } from '@/lib/error';

export const useMainTimelineContent = (
  instance: ComponentInternalInstance | null
): void => {
  if (!instance) {
    throw new NullPointerError('Not Context');
  }
  onMounted(() => {
    Promise.all([nextTick()]).then(() => {
      const gsap = new AppGlobalGSAP().getGSAP;

      fadeInForTimeLine(gsap);

      gsap.effects.fadeInForTimeLine('#left_1', { trigger: '#left_1' });
      gsap.effects.fadeInForTimeLine('#left_2', { trigger: '#left_2' });
      gsap.effects.fadeInForTimeLine('#left_3', { trigger: '#left_3' });
      gsap.effects.fadeInForTimeLine('#left_4', { trigger: '#left_4' });
      gsap.effects.fadeInForTimeLine('#left_5', { trigger: '#left_5' });
      gsap.effects.fadeInForTimeLine('#left_6', { trigger: '#left_6' });
      gsap.effects.fadeInForTimeLine('#left_7', { trigger: '#left_7' });

      gsap.effects.fadeInForTimeLine('#right_1', { trigger: '#right_1' });
      gsap.effects.fadeInForTimeLine('#right_2', { trigger: '#right_2' });
      gsap.effects.fadeInForTimeLine('#right_3', { trigger: '#right_3' });
      gsap.effects.fadeInForTimeLine('#right_4', { trigger: '#right_4' });
      gsap.effects.fadeInForTimeLine('#right_5', { trigger: '#right_5' });
      gsap.effects.fadeInForTimeLine('#right_6', { trigger: '#right_6' });
    });
  });
};
