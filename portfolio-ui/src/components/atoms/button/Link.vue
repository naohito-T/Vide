<template>
  <nuxt-link :to="link"><slot /></nuxt-link>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
export default defineComponent({
  props: {
    link: {
      type: String,
      required: true
    }
  },
  setup() {
    return {};
  }
});
</script>
