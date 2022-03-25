<template>
  <div>
    <Header />
    <main class="main">
      <LayoutImage :projects="mockProjects" />
      <SNSIcons />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Header from '@/components/organisms/Header.vue';
import LayoutImage from '@/components/organisms/LayoutImage.vue';
import SNSIcons from '@/components/organisms/VerticalSNSIcons.vue';
import { mockProjects } from '@/__mocks__';

export default defineComponent({
  components: {
    Header,
    LayoutImage,
    SNSIcons
  },
  setup() {
    return {
      mockProjects
    };
  }
});
</script>
<style lang="scss" scoped>
.main {
  padding-top: 100px;
}
</style>
