<template>
  <div class="fade" :id="gsapId">
    <p class="fade-title">{{ title }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, nextTick } from '@nuxtjs/composition-api';
import { AppGlobalGSAP, setAlpha, fadeInFromLeft, fadeInFromRight } from '@/lib/gsap';

export default defineComponent({
  props: {
    gsapId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: 'Naohito-T'
    },
    direction: {
      type: String,
      defualt: ''
    }
  },
  setup(props) {
    onMounted(() => {
      Promise.all([nextTick()]).then(() => {
        const gsap = new AppGlobalGSAP().getGSAP;
        setAlpha(gsap, '.fade');
        /** switchさせる(ここをUtilsに分けてもいいかもしれない) */
        switch (props.direction) {
          case 'left':
            fadeInFromLeft(gsap);
            gsap.effects.fadeInFromLeft('.fade', { trigger: '.fade' });
            break;
          case 'right':
            fadeInFromRight(gsap);
            gsap.effects.fadeInFromRight('.fade', { trigger: '.fade' });
            break;
          case 'top':
            fadeInFromLeft(gsap);
            gsap.effects.fadeInFromLeft('.fade', { trigger: '.fade' });
            break;
          case 'bottom':
            fadeInFromLeft(gsap);
            gsap.effects.fadeInFromLeft('.fade', { trigger: '.fade' });
            break;
          default:
            fadeInFromLeft(gsap);
            gsap.effects.fadeInFromLeft(`#${props.gsapId}`, {
              trigger: `#${props.gsapId}`
            });
        }
      });
    });
    return {};
  }
});
</script>

<style lang="scss" scoped>
.fade {
  @include positionAbsWithTopLeft(-10px, 0px);
  @include fontSizeWithWhiteSpaceAndZIndex(4vw, nowrap, 2);

  @include sp {
    @include positionAbsWithTopLeft(-130px, 0px);
    font-size: getSpVW(25);
    padding: 0 10px;
  }

  &-title {
    user-select: none;
  }
}
</style>
