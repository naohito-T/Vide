<template>
  <div>
    <main class="container">
      <Header />
      <!-- プログレスバーにする -->
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
    </main>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  onMounted,
  ref,
  computed,
  onUnmounted
} from '@nuxtjs/composition-api';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { arrayFactorys } from '@/utils';
import Header from '@/components/organisms/Header.vue';

export default defineComponent({
  components: {
    Header
  },
  setup() {
    const { app } = useContext();

    const debugState = ref<string[]>([]);
    debugState.value = arrayFactorys(
      'https://source.unsplash.com/VkwRmha1_tI/800x533',
      5
    );
    const date = computed(() => {
      return app.$stores.home.snapList;
    });
    console.log(`top template${JSON.stringify(date)}`);

    // @see https://8oo.jp/blog/39/
    // 上を見て色々やる
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

    onUnmounted(() => {
      gsap.registerPlugin();
    });

    return {
      debugState
    };
  }
});
</script>

<style lang="scss" scoped>
.fotter {
  z-index: 10;
  position: absolute; /*←絶対位置*/
  bottom: 0; /*下に固定*/
}

.container {
  width: 99vw;
  height: 100vh;
  overscroll-behavior: none;
  display: flex;
  flex-wrap: nowrap;

  &-top {
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

.red {
  background-color: red;
  width: 99vw;
  height: 100vh;
}
</style>
