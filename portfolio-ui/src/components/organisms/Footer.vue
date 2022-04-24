<!-- 配置した要素をanimation で全て出す。-->
<template>
  <div class="footer">
    <span class="footer-item">
      <span class="footer-item__title animation">ANIMATION</span>
      <span class="footer-item__subtitle animation">BACKGROUND</span>
    </span>
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
import { generateTweenUnknown } from '@/lib/gsap';

export default defineComponent({
  setup() {
    let tween: gsap.core.Tween;
    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger);

      const option = {
        x: 400,
        scrollTrigger: {
          trigger: '.footer',
          start: 'top center', // 画面の中央が開始一
          toggleActions: 'play pause resume reset', // スクロールを戻したらもう一度開始させる
          markers: true
        }
      };
      const items = gsap.utils.toArray('.animation');
      // generateTweenUnknown(items, option);
      tween = gsap.to(items, {
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
      // gsap.killTweensOf('.animation');
      tween.kill(tween);
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

.bg {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  color: #fff;
}

.bg.-visible:before {
  transform: translate(0, 0);
}

.bg:before {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #a33e46;
  transform: translate(0, 100%);
  transition: transform cubic-bezier(0.215, 0.61, 0.355, 1) 0.6s;
  content: '';
}

/* テキストのスタイル */
.title {
  display: block;
  color: #fff;
  font-family: 'Josefin Sans', sans-serif;
  text-align: center;
}

.title span {
  display: block;
  opacity: 0;
  transition: transform cubic-bezier(0.215, 0.61, 0.355, 1) 1s,
    opacity linear 0.7s;
}

.title span:first-child {
  transform: translate(0, 40px);
  font-size: 20px;
  transition-delay: 0.25s;
}

.title span:last-child {
  margin-top: 18px;
  transform: translate(0, 30px);
  font-size: 48px;
  transition-delay: 0.45s;
}

.bg.-visible .title span {
  opacity: 1;
  transform: translate(0, 0);
}
</style>
