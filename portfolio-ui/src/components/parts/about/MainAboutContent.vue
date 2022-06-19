<template>
  <main class="about-main">
    <div class="about-main__title">
      <AtomsTextGlitchText :texts="'I am a...'" />
    </div>
    <div class="about-main__promise">
      <MoleculesHoverPanel />
    </div>
    <div class="about-main__title">
      <AtomsTextGlitchText :texts="'Me...'" />
    </div>
    <MoleculesMeAbout />
  </main>
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  nextTick
} from '@nuxtjs/composition-api';
import { AppGlobalGSAP } from '@/lib/gsap';
import {
  useMainAboutContent,
  useMainAbountContentType
} from '@/composable/about';
import { commonErrorHandler } from '@/lib/error';

export default defineComponent({
  setup() {
    onMounted(() => {
      Promise.all([nextTick()]).then(() => {
        const gsap = new AppGlobalGSAP().getGSAP;
        const area = document.querySelector('.container_img');
        const panels = document.querySelectorAll('.pn50');
        gsap.to('.container_img', {
          duration: 1,
          scrollTrigger: {
            trigger: '.container_img',
            toggleActions: 'play reset resume reset',
            start: 'top center+=30%', // topとは、triggerとして設定した.containerのトップ部分を指していて、centerはブラウザ側の中央部分を指しています。
            // end: '+=500',
            toggleClass: 'action'
          }
        });

        gsap.to('.a', {
          duration: 1,
          scrollTrigger: {
            trigger: '.a',
            toggleActions: 'play reset resume reset',
            start: 'top center+=30%', // topとは、triggerとして設定した.containerのトップ部分を指していて、centerはブラウザ側の中央部分を指しています。
            // end: '+=500',
            toggleClass: 'action'
          }
        });
      });
    });
    // const instance = getCurrentInstance();
    // try {
    //   const {
    //     texts,
    //     constitutesDesc,
    //     programDesc,
    //     accessoryDesc,
    //     beautifyDesc,
    //     techDesc
    //   } = useMainAboutContent() as useMainAbountContentType;
    //   return {
    //     texts,
    //     constitutesDesc,
    //     programDesc,
    //     accessoryDesc,
    //     beautifyDesc,
    //     techDesc
    //   };
    // } catch (e: unknown) {
    //   commonErrorHandler(e, instance);
    // }
    return {};
  }
});
</script>
<style lang="scss" scoped>
.about-main {
  &__title {
    @include displayFlex(center, row, center);

    margin-bottom: 50px;
    user-select: none;
  }

  &__promise {
    margin-bottom: 50px;
  }
}
</style>
