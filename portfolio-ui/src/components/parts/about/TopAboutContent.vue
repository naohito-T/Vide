<!-- About Top コンポーネント -->
<template>
  <div class="carousel">
    <hooper :settings="hooperSettings">
      <slide v-for="(project, index) in projects" :key="index">
        <h1 class="carousel-title" :data-number="`0${++index}`">
          {{ project.title }}
        </h1>
        <p class="carousel-desc"></p>
        <template v-if="project.site_url">
          <a :href="project.site_url" target="_blank">
            <img
              class="carousel-img"
              :src="project.image_url"
              :alt="project.title"
            />
          </a>
        </template>
        <template v-else>
          <img
            class="carousel-img"
            :src="project.image_url"
            :alt="project.title"
          />
        </template>
      </slide>
      <hooper-progress slot="hooper-addons"></hooper-progress>
    </hooper>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from '@nuxtjs/composition-api';
import { AboutPageProject } from '@/lib/types';
import {
  Hooper,
  Slide,
  Progress as HooperProgress
  // Pagination as HooperPagination, // ページネーションが必要なときにimport
  // Navigation as HooperNavigation // 左右のナビゲーションが必要なときにimport
} from 'hooper';
import 'hooper/dist/hooper.css'; // hooper default css 変えたい時はこれのルールセットを上書きする

export default defineComponent({
  props: {
    projects: {
      type: Array as PropType<AboutPageProject[]>,
      required: true
    }
  },
  components: {
    Hooper,
    Slide,
    HooperProgress
  },
  setup(props) {
    const hooperSettings = reactive({
      progress: true,
      autoPlay: true,
      playSpeed: 2000,
      wheelControl: false
    });
    return {
      hooperSettings
    };
  }
});
</script>

<style lang="scss" scoped>
.carousel {
  @include displayFlex(center, row, center);
  @include positionRelativeBox(100vh, 100%);
  text-align: center;

  @include pc {
    margin-bottom: 20vh;
  }

  &-title {
    @include positionAbsWithTopLeft(5%, 10%);
    z-index: 2;
    padding-left: 8%;
    font-size: 30px;

    &:before {
      @include positionAbsWithTopLeft(50%, 0);

      content: attr(data-number);
      transform: translateY(-50%);
      color: rgba(63, 193, 201, 0.3);
      font-size: 80px;

      @include sp {
        top: 30%;
        left: -20%;
      }
    }

    &:after {
      @include positionAbsWithBottomLeft(-15px, 0);
      content: '';
      width: 100px;
      height: 1px;
      background-color: #3fc1c9;

      @include sp {
        bottom: 6px;
        left: -15px;
      }
    }
  }

  &-img {
    height: 100%;
    // ここはここ使ってもいいかも
    // min-width: 50%;
  }
}

/* hooper deafult css 編集 */
.hooper {
  height: 70vh;

  &-progress {
    @include positionAbsWithTopLeft(310px, -28vw);
    height: 1px;
    width: 300px;
    background-color: #efefef;
    z-index: 10;
    transform: rotate(90deg);
  }
}
</style>
