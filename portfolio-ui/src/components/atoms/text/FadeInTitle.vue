<template>
  <div class="fade">
    <p ref="titleEle" class="fade-title">{{ title }}</p>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  ref,
  nextTick
} from '@nuxtjs/composition-api';
import { AppGlobalGSAP, setAlpha } from '@/lib/gsap';

export default defineComponent({
  props: {
    title: {
      type: String,
      default: 'Naohito-T'
    }
  },
  setup() {
    const titleEle = ref<HTMLElement | null>(null);
    onMounted(() => {
      Promise.all([nextTick()]).then(() => {
        /** domを取得できたら横から出現させる */
        const gsap = new AppGlobalGSAP().getGSAP;
        console.log('title ele あり');
        setAlpha(gsap, '.fade');
        // gsap.set('.container-vision', { autoAlpha: 0, ...op });
        gsap.to('.fade', {
          left: 100,
          autoAlpha: 1,
          duration: 1,
          scrollTrigger: {
            trigger: '.fade',
            toggleActions: 'play reset resume reset',
            start: 'top center', // topとは、triggerとして設定した.containerのトップ部分を指していて、centerはブラウザ側の中央部分を指しています。
            end: '+=500'
            // markers: true
          }
        });
        // toggleActions
        // 左から順番にonEnter、onLeave、onEnterBack、onLeaveBackの4つのトグル位置で、アニメーションをどのように制御するかを指定します。
        // document
        //   .querySelectorAll('.container-vision__wrap-desc')
        //   .forEach((box) => {
        //     box.addEventListener('mouseenter', () => {
        //       gsap.to('.container-vision__wrap-desc', {
        //         keyframes: [
        //           { rotation: 360, duration: 0.3 },
        //           { rotation: 360, duration: 0.3 },
        //           { rotation: 360, duration: 0.3 }
        //         ]
        //       });
        //     });
        //   });

        // document.querySelectorAll('.container-vision__wrap').forEach((box) => {
        //   box.addEventListener('mouseenter', () => {
        //     hoverEffect();
        //     gsap.effects.hoverAction('.container-vision__wrap', {
        //       duration: 5,
        //       scale: 1.5,
        //       delay: 0.5,
        //       stagger: 0.5
        //     });
        //   });
        // });
      });
    });
    return {
      titleEle
    };
  }
});
</script>

<style lang="scss" scoped>
</style>
