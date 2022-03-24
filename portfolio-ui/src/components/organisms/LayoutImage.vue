<!-- Imageをflexで自動レイアウトする 現状1枚しか表示しないため[0]で決め打ちしている。-->
<template>
  <ul class="tile">
    <li v-for="(project, index) in projects" :key="index" class="tile-item">
      <FlexImage :img="project.imageURLList[0]" :alt="project.title" />
      <ImageMask
        :title="project.title"
        :desc="project.description"
        :link="project.documentId"
      />
    </li>
    <!--  ここに空の<li>を追加することで、最終的な写真が狂ったように引き伸ばされることがありません。 -->
    <li></li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';
import FlexImage from '@/components/atoms/Image.vue';
import ImageMask from '@/components/atoms/ImageMask.vue';
import { Project } from '@/lib/types';

export default defineComponent({
  components: {
    FlexImage,
    ImageMask
  },
  props: {
    projects: {
      type: Array as PropType<Project[]>,
      required: true
    }
  },
  setup() {
    return {};
  }
});
</script>
<style lang="scss" scoped>
.tile {
  display: flex;
  flex-wrap: wrap;

  &-item {
    height: 40vh;
    flex-grow: 1;
    position: relative;

    &:hover .mask {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
      opacity: 1; /* ホバーで表示する */
    }
  }
}

li:last-child {
  // ここで "10 "を使うことに科学的根拠はない。私のテストでは、これが最も良い結果でした。
  flex-grow: 10;
}

@media (max-aspect-ratio: 1/1) {
  li {
    height: 30vh;
  }
}

// Short screens

@media (max-height: 480px) {
  li {
    height: 80vh;
  }
}

// Smaller screens in portrait

@media (max-aspect-ratio: 1/1) and (max-width: 480px) {
  ul {
    flex-direction: row;
  }

  li {
    height: auto;
    width: 100%;
  }
  img {
    width: 100%;
    max-height: 75vh;
    min-width: 0;
  }
}
</style>
