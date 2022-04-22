<template>
  <!-- v-slotでlayout変える -->
  <MaxWindowFooter>
    <template v-slot:footer>
      <Footer />
    </template>
  </MaxWindowFooter>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Footer from '@/components/organisms/Footer.vue';
import MaxWindowFooter from '@/components/molecules/MaxWindowFooter.vue';

export default defineComponent({
  components: {
    Footer,
    MaxWindowFooter
  },
  setup() {}
});
</script>

<style lang="scss" scoped></style>
