<template>
  <ul class="tile">
    <li v-for="(project, index) in projects" :key="index" class="tile-item">
      <AtomsImage :img="project.image_url" :alt="project.title" />
      <AtomsImageMask
        :title="project.title"
        :desc="project.description"
        :link="project.document_id"
      />
    </li>
    <!--  ここに空の<li>を追加することで、最終的な写真が狂ったように引き伸ばされることがない。 -->
    <li></li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';
import { Project } from '@/lib/types';

export default defineComponent({
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

    /* hover時 縦に180度回転して画像をマスク */
    &:hover .mask:nth-child(odd) {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
      opacity: 1; /* ホバーで表示する */
    }

    /* hover時 横に360度回転して画像をマスク */
    &:hover .mask:nth-child(even) {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
      opacity: 1; /* ホバーで表示する */
    }

    &:last-child {
      // ここで "10 "を使うことに科学的根拠はない。私のテストでは、これが最も良い結果でした。
      flex-grow: 10;
    }
  }
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
    height: 100%;
    max-height: 75vh;
    min-width: 0;
  }
}
</style>
