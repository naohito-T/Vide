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
        v-for="(project, index) in projects"
        :key="index"
        class="panel sub-panel"
      >
        <div
          class="panel-list"
          :style="{ backgroundImage: `url(${project.image_url})` }"
        >
          <template v-if="project.site_url">
            <nuxt-link :to="project.site_url" class="panel-list__anker">
              <p class="panel-list__title">{{ project.title }}</p>
              <p class="panel-list__subtitle">{{ project.sub_title }}</p>
            </nuxt-link>
          </template>
          <template v-else>
            <p class="panel-list__title">{{ project.title }}</p>
            <p class="panel-list__subtitle">{{ project.sub_title }}</p>
          </template>
        </div>
      </section>
    </main>
  </client-only>
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
import { commonErrorHandler } from '@/lib/error';
import { TopPageProject } from '@/lib/types';
export default defineComponent({
  props: {
    projects: {
      type: Array as PropType<TopPageProject[]>,
      required: true
    }
  },
  setup() {
    const instance = getCurrentInstance();
    try {
      const { mainEle } = useMainTopContent(instance) as UseMainTopContentType;
      return {
        mainEle
      };
    } catch (e: unknown) {
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
      width: 95vw;
      height: 95%;
      background-size: cover;

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
