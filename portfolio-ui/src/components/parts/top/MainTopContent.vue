<template>
  <main class="main" ref="mainEle">
    <!-- ここはcenterにくるタイトルとその説明、下部にはプログレスバー -->
    <section class="main-top panel">
      <div class="main-top-wrap">
        <h1 class="main-top-wrap__title">Coding is design</h1>
        <p class="main-top-wrap__desc">
          My mission is to write coding as beautifully as design and to make the
          whole team excited!
        </p>
      </div>
    </section>

    <!-- v-for使う。a タグでwork/_slugに遷移 -->
    <!-- title: string, subTitle: string, slug: string, imgURL: string -->
    <client-only>
      <section
        v-for="(url, index) in imgState"
        :key="index"
        class="panel sub-panel"
      >
        <!-- /works/_slugに飛ばす -->
        <div class="panel-list">
          <nuxt-link to="/works/1" class="panel-list__anker">
            <p class="panel-list__title">MainTitle</p>
            <img :src="url" alt="" class="panel-list__img" />
          </nuxt-link>
          <p class="panel-list__subtitle">SubTitle</p>
        </div>
      </section>
    </client-only>
    <AtomsTextAnimationText />
  </main>
</template>
<script lang="ts">
import {
  defineComponent,
  PropType,
  getCurrentInstance
} from '@nuxtjs/composition-api';
import {
  useMainTopContent,
  UseMainTopContentType
} from '@/composable/top/useMainTopContent';
import { commonErrorHandler } from '~/lib/error';

export default defineComponent({
  props: {
    imgState: {
      type: Array as PropType<String[]>,
      required: true
    }
  },
  setup() {
    const instance = getCurrentInstance();
    try {
      const { mainEle } = useMainTopContent() as UseMainTopContentType;
      return {
        mainEle
      };
    } catch (e) {
      commonErrorHandler(e, instance);
    }
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
