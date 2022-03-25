<template>
  <div>
    <Header />
    <main class="main">
      <SNSIcons />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Header from '@/components/organisms/Header.vue';
import SNSIcons from '@/components/organisms/VerticalSNSIcons.vue';

export default defineComponent({
  components: {
    Header,
    SNSIcons
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss">
.main {
  height: 100vh;
  position: relative;
}
</style>
