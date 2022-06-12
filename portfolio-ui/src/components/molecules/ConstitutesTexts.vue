<!--
@desc Titleとdescriptionのセット about pageでしか使っていない
-->

<template>
  <div class="container">
    <div class="vision">
      <p ref="titleEle" class="container-vision">
        Creative for your whole life
      </p>
    </div>
    <div class="container-vision__wrap">
      <p class="container-vision__wrap-desc">
        {{ description }}
      </p>
    </div>
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
    description: {
      type: String,
      required: true
    }
  },
  setup() {
    const titleEle = ref<HTMLElement | null>(null);
    onMounted(() => {
      Promise.all([nextTick()]).then(() => {
        /** domを取得できたら横から出現させる */
        const gsap = new AppGlobalGSAP().getGSAP;
        if (titleEle.value) {
          setAlpha(gsap, '.container-vision');
          setAlpha(gsap, '.container-vision__wrap');
          // gsap.set('.container-vision', { autoAlpha: 0, ...op });
          gsap.to('.container-vision', {
            left: 100,
            autoAlpha: 1,
            duration: 1,
            scrollTrigger: {
              trigger: '.vision',
              toggleActions: 'play reset resume reset',
              start: 'top center', // topとは、triggerとして設定した.containerのトップ部分を指していて、centerはブラウザ側の中央部分を指しています。
              end: '+=500'
              // markers: true
            }
          });
          gsap.to('.container-vision__wrap', {
            y: -10,
            autoAlpha: 1,
            duration: 1,
            scrollTrigger: {
              trigger: '.vision',
              toggleActions: 'play reset resume reset',
              start: 'top center', // topとは、triggerとして設定した.containerのトップ部分を指していて、centerはブラウザ側の中央部分を指しています。
              end: '+=500'
              // markers: true
            }
          });
        }
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
.container {
  position: relative;
  height: 100%;
  padding: 0 20px;

  @include sp {
    padding: 20px 20px;
  }

  &-vision {
    @include positionAbsWithTopLeft(-10px, 0px);
    @include fontSizeWithWhiteSpaceAndZIndex(4vw, nowrap, 2);
    user-select: none;

    @include sp {
      @include positionAbsWithTopLeft(-130px, 0px);
      font-size: getSpVW(25);
      padding: 0 10px;
    }

    &__wrap {
      @include displayFlex(center, row, center);
      @include sp {
        @include displayFlex(flex-start, row, center);
      }
      height: 100%;

      @include sp {
        padding: 0 20px;
      }

      &-desc {
        @include pc {
          font-size: getTabVW(18);
        }

        @include largePc {
          font-size: getTabVW(18);
        }
      }
    }
  }
}
</style>
