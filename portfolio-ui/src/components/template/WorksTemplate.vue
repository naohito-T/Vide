<template>
  <div>
    <Header />
    <main class="main">
      <LayoutImage :projects="mockProjects" />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Header from '@/components/organisms/Header.vue';
import LayoutImage from '@/components/organisms/LayoutImage.vue';
import { mockProjects } from '@/__mocks__';

export default defineComponent({
  components: {
    Header,
    LayoutImage
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
