<template>
  <AboutTemplate />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import AboutTemplate from '@/components/template/AboutTemplate.vue';

export default defineComponent({
  components: {
    AboutTemplate
  },
  setup() {
    return {};
  }
});
</script>
