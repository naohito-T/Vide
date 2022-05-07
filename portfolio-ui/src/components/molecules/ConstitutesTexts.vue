<template>
  <div class="container">
    <p v-if="title" ref="titleEle" class="container-vision">{{ title }}</p>
    <div class="container-vision__wrap">
      <p class="container-vision__wrap-desc">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api';
import { hoverEffect } from '@/lib/gsap';
import { gsap } from 'gsap';

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      required: true
    }
  },
  setup() {
    const titleEle = ref<Element | null>(null);
    onMounted(() => {
      /** domを取得できたら横から出現させる */
      if (titleEle) {
        console.log(`titleEle ${JSON.stringify(titleEle)}`);
        // くるっと回るアニメーション

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

        document.querySelectorAll('.container-vision__wrap').forEach((box) => {
          box.addEventListener('mouseenter', () => {
            hoverEffect();
            gsap.effects.hoverAction('.container-vision__wrap', {
              duration: 5,
              scale: 1.5,
              delay: 0.5,
              stagger: 0.5
            });
          });
        });
      } else {
        console.log('title ele なし');
      }
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

  &-vision {
    @include positionAbsWithTopLeft(-10px, -150px);
    @include fontSizeWithWhiteSpaceAndZIndex(4vw, nowrap, 2);

    @include sp {
      @include positionAbsWithTopLeft(-130px, 0px);
      font-size: getSpVW(25);
      padding: 0 10px;
    }

    &__wrap {
      @include displayFlex(center, row, center);
      height: 100%;

      @include sp {
        padding: 0 20px;
      }

      &-desc {
        @include pc {
          font-size: getTabVW(18);
        }
      }
    }
  }
}
</style>
