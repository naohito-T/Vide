<template>
  <div class="fade">
    <p class="fade-title">{{ title }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, nextTick } from '@nuxtjs/composition-api';
import { AppGlobalGSAP, setAlpha, fadeInFromLeft } from '@/lib/gsap';

export default defineComponent({
  props: {
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
        console.log('title ele あり');
        setAlpha(gsap, '.fade');
        /** switchさせる(ここをUtilsに分けてもいいかもしれない) */
        switch (props.direction) {
          case 'left':
            fadeInFromLeft(gsap);
            gsap.effects.fadeInFromLeft('.fade', { trigger: '.fade' });
            break;
          case 'right':
            fadeInFromLeft(gsap);
            gsap.effects.fadeInFromLeft('.fade', { trigger: '.fade' });
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
            gsap.effects.fadeInFromLeft('.fade', { trigger: '.fade' });
        }
        // fadeInFromLeft(gsap);
        // gsap.effects.fadeInFromLeft('.fade', { trigger: '.fade' });
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
}
</style>
