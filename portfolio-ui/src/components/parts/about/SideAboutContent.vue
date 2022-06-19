<template>
  <div class="side">animation point</div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted
} from '@nuxtjs/composition-api';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineComponent({
  setup() {
    // onMounted(() => {
    //   gsap.registerPlugin(ScrollTrigger);
    //   let item = gsap.utils.toArray('.side');
    //   gsap.to(item, {
    //     x: 400,
    //     scrollTrigger: {
    //       trigger: '.footer',
    //       start: 'top center', // 画面の中央が開始一
    //       toggleActions: 'play pause resume reset', // スクロールを戻したらもう一度開始させる
    //       markers: true
    //     }
    //   });
    // });
    // onUnmounted(() => {
    //   gsap.killTweensOf('.animation');
    // });
  }
});
</script>

<style lang="scss" scoped>
.side {
  width: 200px;

  @include tab {
    display: none;
  }
}
</style>
