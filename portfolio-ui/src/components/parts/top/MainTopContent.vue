<template>
  <div>
    <!-- ここはcenterにくるタイトルとその説明、下部にはプログレスバー -->
    <section class="container-top panel">
      <div class="container-top-wrap">
        <h1 class="container-top-wrap__title">Coding is design</h1>
        <p class="container-top-wrap__desc">
          Scroll vertically to scrub the horizontal animation. It also
          dynamically snaps to the sections in an organic way based on the
          velocity. The snapping occurs based on the natural ending position
          after momentum is applied, not a simplistic "wherever it is when the
          user stops".
        </p>
      </div>
    </section>

    <!-- v-for使う。a タグでwork/_slugに遷移 -->
    <!-- title: string, subTitle: string, slug: string, imgURL: string -->
    <section
      v-for="(url, index) in debugState"
      :key="index"
      class="panel sub-panel"
    >
      <!-- /works/_slugに飛ばす -->
      <div class="panel-list">
        <nuxt-link to="/works/1" class="panel-list__anker">
          <p class="panel-list__title">MainTitle</p>
          <img :src="url" alt="" />
        </nuxt-link>
        <p class="panel-list__subtitle">SubTitle</p>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted,
  PropType
} from '@nuxtjs/composition-api';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineComponent({
  props: {
    debugState: {
      type: Array as PropType<String[]>,
      required: true
    }
  },
  setup(props) {
    console.log(`ddd${props.debugState}`);
    // @see https://8oo.jp/blog/39/
    // onMountedでブラウザバックにも対応ができる。
    onMounted(() => {
      gsap.registerPlugin(ScrollTrigger);

      let sections = gsap.utils.toArray('.panel');
      console.log(sections);
      // GSAPでは、transform : translateX、transform : translateYの代わりに、X座標（x）、Y座標（y）、Xパーセント（xPercent）、Yパーセント（yPercent）を提供しています。
      /** topがWindowはばになるため、それをwindow幅にする */

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '.container',
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: '+=3500'
        }
      });
    });

    onUnmounted(() => {
      gsap.killTweensOf('.panel');
    });

    return {};
  }
});
</script>

<style lang="scss">
.container-top {
  @include displayFlex(center, column, center);

  &-wrap {
    width: 90vw;
    &__title {
      @include fontSizeWithWhiteSpaceAndZIndex(8vw, nowrap, 0);
      margin-bottom: 20px;
    }

    &__desc {
    }
  }
}
/** panel共通 */
.panel {
  margin: 0 30px;
  width: 99vw;
  height: 100vh;

  &-list {
    @include displayFlex(flex-end, column, center);
    position: relative;

    &__title {
      @include positionAbsWithTopLeft(30px, -50px);
      z-index: 10;
      font-size: 4.5vw;
    }

    &__anker {
      margin-bottom: 20px;
    }

    &__subtitle {
      font-size: 2vw;
      opacity: 0.6;
    }
  }
}

/** 1, 5, 9, 13, n.... */
.sub-panel:nth-child(4n + 1) {
  @include displayFlex(center, column, flex-end);
}

/** 2, 4, 6, 8, n.... */
.sub-panel:nth-child(2n) {
  @include displayFlex(center, column, center);
}

/** 2, 4, 6, 8, n.... */
.sub-panel:nth-child(4n + 3) {
  @include displayFlex(center, column, flex-start);
}
</style>
