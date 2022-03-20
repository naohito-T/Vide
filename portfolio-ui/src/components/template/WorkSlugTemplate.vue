<template>
  <div>
    <p>WorkSlugTemplate Page</p>
    <p>{{ slug }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    slug: {
      type: String,
      require: true
    }
  },
  setup() {
    return {};
  }
});
</script>
