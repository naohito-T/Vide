<!-- 配置した要素をanimation で全て出す。-->
<template>
  <div class="footer">
    <span class="footer-item">
      <span class="footer-item__title animation">ANIMATION</span>
      <span class="footer-item__subtitle animation">BACKGROUND</span>
    </span>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
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
    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger);

      let item = gsap.utils.toArray('.animation');
      gsap.to(item, {
        x: 400,
        scrollTrigger: {
          trigger: '.footer',
          start: 'top center', // 画面の中央が開始一
          toggleActions: 'play pause resume reset', // スクロールを戻したらもう一度開始させる
          markers: true
        }
      });
    });
    onUnmounted(() => {
      gsap.killTweensOf('.animation');
    });
  }
});
</script>

<style lang="scss" scoped>
.footer {
  height: 100vh;
  background-color: aqua;

  .footer-item {
    @include displayFlex(center, column, center);
    height: 100%;
  }

  &:before {
    transform: translate(0, 0);
  }
}
.box {
  width: 22%;
  height: 100px;
  margin: 1%;
  opacity: 0;
  will-change: transform;
  background: #000;
  overflow: hidden;
}
</style>
