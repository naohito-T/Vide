<template>
  <Header />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Header from '@/components/organisms/Header.vue';

export default defineComponent({
  components: {
    Header
  },
  setup() {
    return {};
  }
});
</script>
