<!-- @desc 指定された方向に平行四辺形でfadeしながら表示する -->
<template>
  <div
    :id="gsapId"
    :class="`parallelogram ${className}`"
    :style="{ backgroundImage: `url(${image})` }"
  ></div>
</template>
<script lang="ts">
import { defineComponent, onMounted, nextTick } from '@nuxtjs/composition-api';
import { AppGlobalGSAP, setAlpha, fadeInFromLocation } from '@/lib/gsap';

export default defineComponent({
  props: {
    gsapId: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: 'down-from-left'
    },
    image: {
      type: String,
      required: true
    }
  },
  setup(props) {
    onMounted(() => {
      Promise.all([nextTick()]).then(() => {
        const gsap = new AppGlobalGSAP().getGSAP;
        setAlpha(gsap, `#${props.gsapId}`);
        fadeInFromLocation(gsap);
        gsap.effects.fadeInFromLocation(`#${props.gsapId}`, {
          trigger: `#${props.gsapId}`,
          end: '+=1000'
        });
      });
    });
    return {};
  }
});
</script>

<style lang="scss" scoped>
/** デフォルトの設定 */
.parallelogram {
  height: 80vh;
}

/** 左から斜め下 */
.down-from-left {
  // background-image: url('https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05482_dtrj02.jpg');
  -webkit-clip-path: polygon(0 0, 100% 16%, 100% 100%, 0 84%);
  clip-path: polygon(0 0, 100% 16%, 100% 100%, 0 84%);
}

/** 右から斜め下 */
.down-from-right {
  height: 80vh;
  // background-image: url('https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05482_dtrj02.jpg');
  -webkit-clip-path: polygon(0 13%, 100% 0, 100% 75%, 0 88%);
  clip-path: polygon(0 13%, 100% 0, 100% 75%, 0 88%);
}
</style>
