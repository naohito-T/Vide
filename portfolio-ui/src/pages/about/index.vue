<template>
  <TemplateAboutTemplate :image-urls="imageURLs" />
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from '@nuxtjs/composition-api';
import { useAboutPage } from '@/composable/about/useAboutPage';

export default defineComponent({
  setup() {
    const instance = getCurrentInstance();
    const { timeoutID, imageURLs } = useAboutPage(instance);
    return {
      timeoutID,
      imageURLs
    };
  }
});
</script>
