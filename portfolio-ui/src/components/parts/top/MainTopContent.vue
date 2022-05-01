<template>
  <client-only>
    <main class="main" ref="mainEle">
      <section class="main-top panel">
        <div class="main-top-wrap">
          <h1 class="main-top-wrap__title">Coding is design</h1>
          <p class="main-top-wrap__desc">
            My mission is to write coding as beautifully as design and to make
            the whole team excited!
          </p>
        </div>
      </section>
      <section
        v-for="(url, index) in imgState"
        :key="index"
        class="panel sub-panel"
      >
        <nuxt-link to="/works/1" class="panel-list__anker">
          <div class="panel-list">
            <p class="panel-list__title">MainTitle</p>
            <div>
              <img :src="url" alt="title" class="panel-list__img" />
            </div>
            <p class="panel-list__subtitle">SubTitle</p>
          </div>
        </nuxt-link>
      </section>
    </main>
  </client-only>
</template>
<script lang="ts">
import {
  defineComponent,
  PropOptions,
  getCurrentInstance,
  onMounted,
  nextTick,
  ref,
  useContext,
  useAsync
} from '@nuxtjs/composition-api';
import {
  useMainTopContent,
  UseMainTopContentType
} from '@/composable/top/useMainTopContent';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { commonErrorHandler } from '~/lib/error';

export default defineComponent({
  props: {
    // imgState: {
    //   type: Array,
    //   required: false
    // } as PropOptions<String[] | null>
  },
  setup(props) {
    const imgState = ref<string[] | null>([]);
    // if (!props.imgState) {
    const { app } = useContext();
    useAsync(async () => {
      imgState.value = await app.$stores.home.fetchDownloadURLs('top');
    });
    // }
    const instance = getCurrentInstance();
    const mainEle = ref<Element | null>(null);

    // try {
    // onMounted(() => {
    //   const { mainEle } = useMainTopContent(
    //     instance
    //   ) as UseMainTopContentType;
    //   return {
    //     mainEle
    //   };
    // });
    //   } catch (e) {
    //   commonErrorHandler(e, instance);
    // }
    // try {
    onMounted(() => {
      // DOMが反映させるまで待機させる
      gsap.registerPlugin(ScrollTrigger);
      console.log('next 前');
      let sections = gsap.utils.toArray('.panel');
      console.log('ページが完全に読み込まれました');
      console.log('next 後ろ');

      console.log('next 後ろっd');
      console.log(`sections: ${JSON.stringify(sections)}`);
      // GSAPでは、transform : translateX、transform : translateYの代わりに、X座標（x）、Y座標（y）、Xパーセント（xPercent）、Yパーセント（yPercent）を提供しています。
      /** topがWindow幅になるため、それをwindow幅にする */
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '.main',
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          // base vertical scrolling on how wide the main is so it feels more natural.
          anticipatePin: 1,
          // end: () => `+=${mainEle.value?.clientWidth}`
          end: () => `+=${mainEle.value?.clientWidth}`
        }
      });
    });
    // } catch (e) {
    //   commonErrorHandler(e, instance);
    // }
    return {
      imgState,
      mainEle
    };
  }
});
</script>

<style lang="scss" scoped>
.main {
  width: 99vw;
  height: 100vh;
  overscroll-behavior: none;
  display: flex;
  flex-wrap: nowrap;

  &-top {
    @include displayFlex(center, column, center);
    will-change: transform;

    &-wrap {
      width: 90vw;
      &__title {
        font-size: 8vw;
        white-space: nowrap;
        margin-bottom: 20px;
      }
      &__desc {
        padding-left: 20px;
      }
    }
  }
  /** panel共通 */
  .panel {
    padding: 60px 40px;
    width: 99vw;
    height: 100vh;
    &-list {
      @include displayFlex(flex-end, column, center);

      position: relative;
      width: 100vw;

      &__img {
        width: 100%;
        max-width: 100%;
        height: auto;
      }

      &__title {
        position: absolute;
        top: 30px;
        z-index: 10;
        font-size: 4.5vw;
        left: -50px;
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
}
</style>
