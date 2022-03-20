<template>
  <div>
    <main class="container">
      <header class="header">
        <nav class="nav">
          <ul class="nav-item">
            <nuxt-link to="/works"><p>Works</p></nuxt-link>
            <nuxt-link to="/about"><p>About</p></nuxt-link>
          </ul>
        </nav>
      </header>
      <footer class="fotter">
        <p>maimaimai</p>
      </footer>
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
      <section
        v-for="(url, index) in debugState"
        :key="index"
        class="panel red feature"
      >
        <!-- /works/_slugに飛ばす -->
        <div class="panel-list">
          <nuxt-link to="/works">
            <p>画像に重ねる</p>
            <img :src="url" alt="" />
          </nuxt-link>
          <p>下のタイトル</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  reactive,
  ref
} from '@nuxtjs/composition-api';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { arrayFactorys } from '@/utils';

export default defineComponent({
  components: {
    // Tutorial,
  },
  setup() {
    // const debugState = reactive<{ imageURLs: string[] }>({
    //   imageURLs: [],
    // });
    const debugState = ref<string[]>([]);

    debugState.value = arrayFactorys(
      'https://source.unsplash.com/VkwRmha1_tI/800x533',
      5
    );

    // onMountedでブラウザバックにも対応ができる。
    onMounted(() => {
      if (process.client) {
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
      }
    });

    return {
      debugState
    };
  }
});
</script>

<style lang="scss" scoped>
.header {
  height: 100px; /* 高さを50pxに指定 */
  position: fixed;
  z-index: 10;

  .nav {
    &-item {
      @include displayFlex(center, row, center);
    }
  }
}

.fotter {
  z-index: 10;
  position: absolute; /*←絶対位置*/
  bottom: 0; /*下に固定*/
}

.panel {
  margin: 0 30px;
}

/** 1, 5, 9, 13, n.... */
.feature:nth-child(4n + 1) {
  @include displayFlex(center, column, flex-end);
}

/** 2, 4, 6, 8, n.... */
.feature:nth-child(2n) {
  @include displayFlex(center, column, center);
}

/** 2, 4, 6, 8, n.... */
.feature:nth-child(4n + 3) {
  @include displayFlex(center, column, flex-start);
}

.container {
  width: 99vw;
  height: 100vh;
  overscroll-behavior: none;
  display: flex;
  flex-wrap: nowrap;

  &-top {
    @include displayFlex(center, column, center);
    width: 99vw;
    height: 100%;

    &-wrap {
      width: 90vw;
      &__title {
        font-size: 8vw;
        white-space: nowrap;
      }

      &__desc {
      }
    }
  }
}

.red {
  background-color: red;
  width: 99vw;
  height: 100vh;
}
.orange {
  background-color: orange;
  width: 99vw;
  height: 100vh;
}
.purple {
  background-color: purple;
  width: 99vw;
  height: 100vh;
}
.green {
  background-color: green;
  width: 99vw;
  height: 100vh;
}
.gray {
  background-color: grey;
  width: 99vw;
  height: 100vh;
}
</style>
