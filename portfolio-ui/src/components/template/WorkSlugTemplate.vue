<!--
構成 作品と 下にタイトルとディスクリプション説明(default layout)
新しく変更したい場合は違うやつに
-->
<template>
  <div>
    <Header />
    <main class="main">
      <template v-if="slug === '/works/yduringy'">
        <YduringY />
      </template>
      <template v-if="slug === '/works/motion'">
        <MotionPath />
      </template>
      <template v-if="slug === '/works/jacket'">
        <JacketCover />
      </template>
      <SNSIcons />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api';
import Header from '@/components/organisms/Header.vue';
import SNSIcons from '@/components/organisms/VerticalSNSIcons.vue';
import YduringY from '@/components/parts/works/slug/YduringY.vue';
import MotionPath from '@/components/parts/works/slug/MotionPath.vue';
import JacketCover from '@/components/parts/works/slug/JacketCover.vue';
export default defineComponent({
  components: {
    Header,
    SNSIcons,
    YduringY,
    MotionPath,
    JacketCover
  },
  props: {
    slug: {
      type: String,
      require: true
    }
  },
  setup() {
    onMounted(() => {});

    return {
      // slug
    };
  }
});
</script>

<style lang="scss" scoped>
.main {
  padding-top: 100px;
}
</style>
