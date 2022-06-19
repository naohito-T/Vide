<!--
構成 作品と 下にタイトルとディスクリプション説明(default layout)
新しく変更したい場合は違うやつに
2020 8
-->
<template>
  <div>
    <OrganismsHeader />
    <main class="main">
      <template v-if="slug === '/works/yduringy'">
        <PartsWorksSlugYduringY />
      </template>
      <template v-if="slug === '/works/motion'">
        <PartsWorksSlugMotionPath />
      </template>
      <template v-if="slug === '/works/jacket'">
        <PartsWorksSlugJacketCover />
      </template>
    </main>
    <AtomsTextAnimationText />
    <OrganismsVerticalSNSIcons />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    slug: {
      type: String,
      require: true
    }
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.main {
  padding-top: 100px;
}
</style>
