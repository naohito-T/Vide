<!-- 配置した要素をanimation で全て出す。-->
<template>
  <div class="footer" id="footer_wrap">
    <div class="footer-item">
      <p class="footer-item__title" id="fotter_title">ANIMATION</p>
      <p class="footer-item__subtitle" id="fotter_desc">BACKGROUND</p>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted
} from '@nuxtjs/composition-api';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineComponent({
  setup() {
    // let tween: gsap.core.Tween;
    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger);
      const back = '#footer_wrap';
      const title = '#footer_title';
      const desc = '#footer_desc';

      const option = {
        x: 400,
        scrollTrigger: {
          trigger: '.footer',
          start: 'top center', // 画面の中央が開始一
          toggleActions: 'play pause resume reset', // スクロールを戻したらもう一度開始させる
          markers: true
        }
      };
      // const items = gsap.utils.toArray('.animation');
      // generateTweenUnknown(items, option);
      gsap.to(back, {
        opacity: 1,
        backgroundColor: 'aqua',
        duration: 1,
        scrollTrigger: {
          trigger: '.footer',
          start: 'top center', // 画面の中央が開始一
          toggleActions: 'play pause resume reset', // スクロールを戻したらもう一度開始させる
          markers: true
        }
      });
    });
    onUnmounted(() => {
      // gsap.killTweensOf('.animation');
      // tween.kill(tween);
    });
  }
});
</script>

<style lang="scss" scoped>
.footer {
  height: 100vh;
  // background-color: aqua;
  opacity: 0;

  .footer-item {
    @include displayFlex(center, column, center);
    height: 100%;
  }

  &:before {
    transform: translate(0, 0);
  }
}
</style>
