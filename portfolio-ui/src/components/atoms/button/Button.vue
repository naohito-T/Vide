<template>
  <nuxt-link to="to"><slot /></nuxt-link>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    to: {
      type: String,
      required: true
    }
  },
  setup() {
    return {};
  }
});
</script>
