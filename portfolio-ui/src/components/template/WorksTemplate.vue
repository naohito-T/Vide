<template>
  <div>
    <Header />
    <main class="main">
      <MainWorksContent :projects="mockProjects" />
    </main>
    <SNSIcons />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Header from '@/components/organisms/Header.vue';
import MainWorksContent from '@/components/parts/works/MainWorksContent.vue';
import SNSIcons from '@/components/organisms/VerticalSNSIcons.vue';
import { mockProjects } from '@/__mocks__';

export default defineComponent({
  components: {
    Header,
    MainWorksContent,
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
