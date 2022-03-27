<template>
  <div>
    <Header />
    <SNSIcons />
    <TopAboutContent />
    <div class="wrapper">
      <div class="wrapper-side">animation point</div>
      <main class="wrapper-main">
        <MediumAboutContent />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Header from '@/components/organisms/Header.vue';
import SNSIcons from '@/components/organisms/VerticalSNSIcons.vue';
import TopAboutContent from '@/components/parts/about/TopAboutContent.vue';
import MediumAboutContent from '@/components/parts/about/MediumAboutContent.vue';
import Footer from '@/components/organisms/Footer.vue';

export default defineComponent({
  components: {
    Header,
    SNSIcons,
    TopAboutContent,
    MediumAboutContent,
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

  &-side {
    width: 200px;
    background-color: beige;
  }

  &-main {
    flex: 1; /* サイドから伸ばす */
  }
}
</style>
