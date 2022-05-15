import {
  onMounted,
  onUnmounted,
  InjectionKey,
  ComponentInternalInstance,
  nextTick
} from '@nuxtjs/composition-api';
import { AppGlobalGSAP } from '@/lib/gsap';
import { NullPointerError } from '@/lib/error';

export const useMainSkillsContent = (
  instance: ComponentInternalInstance | null
) => {
  if (!instance) {
    throw new NullPointerError('Not Context');
  }
  onMounted(async () => {
    // 子コンポーネントのDOMが反映させるまで待機させる(これがないとclient-onlyがきかない)
    await Promise.all([await nextTick()]);
    const gsap = new AppGlobalGSAP().getGSAP;
    const images = gsap.utils.toArray('img');
    const sections = gsap.utils.toArray('section') as HTMLElement[];
    const loader = document.querySelector('.loader--text');
    const updateProgress = (instance: any) => {
      if (!loader) return;
      loader.textContent = `${Math.round(
        (instance.progressedCount * 100) / images.length
      )}%`;
    };

    const showDemo = () => {
      document.body.style.overflow = 'auto';
      document?.scrollingElement?.scrollTo(0, 0);
      gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });
      console.log(`sections${sections}`);

      sections.forEach((section: HTMLElement, index) => {
        const w = section.querySelector('.wrapper');
        if (!w) {
          console.log('wがない');
          return;
        }
        console.log(`w${JSON.stringify(w)}`);
        console.log(`w${w.scrollWidth}`);
        const [x, xEnd] =
          index % 2
            ? ['100%', (w.scrollWidth - section.offsetWidth) * -1]
            : [w.scrollWidth * -1, 0];
        gsap.fromTo(
          w,
          { x },
          {
            x: xEnd,
            scrollTrigger: {
              trigger: section,
              scrub: 0.5
            }
          }
        );
      });
    };
    // await imagesLoaded(images as Element[]).on('progress', updateProgress);
    // await imagesLoaded(images as Element[]).on('always', showDemo);
  });
  onUnmounted(() => {});

  return {};
};

// type
export type UseMainSkillsContentType = ReturnType<typeof useMainSkillsContent>;
// key
export const UseMainSkillsContentTypeKey: InjectionKey<UseMainSkillsContentType> =
  Symbol('useMainSkillsContent');
