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
      <SNSIcons />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api';
import { gsap } from 'gsap';
import Header from '@/components/organisms/Header.vue';
import SNSIcons from '@/components/organisms/VerticalSNSIcons.vue';
import YduringY from '@/components/parts/works/YduringY.vue';
export default defineComponent({
  components: {
    Header,
    SNSIcons,
    YduringY
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
