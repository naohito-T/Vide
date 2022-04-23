<template>
  <div>
    <Header />
    <TopAboutContent />
    <div class="wrapper">
      <SideAboutContent />
      <main class="wrapper-main">
        <MainAboutContent />
      </main>
    </div>
    <Footer />
    <SNSIcons />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Header from '@/components/organisms/Header.vue';
import SNSIcons from '@/components/organisms/VerticalSNSIcons.vue';
import TopAboutContent from '@/components/parts/about/TopAboutContent.vue';
import MainAboutContent from '@/components/parts/about/MainAboutContent.vue';
import SideAboutContent from '@/components/parts/about/SideAboutContent.vue';
import Footer from '@/components/organisms/Footer.vue';

export default defineComponent({
  components: {
    Header,
    SNSIcons,
    TopAboutContent,
    MainAboutContent,
    SideAboutContent,
    Footer
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;

  &-main {
    flex: 1; /* サイドから伸ばす */
  }
}
</style>
