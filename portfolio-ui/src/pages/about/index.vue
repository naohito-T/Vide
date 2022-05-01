<template>
  <TemplateAboutTemplate :image-urls="imgState" />
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from '@nuxtjs/composition-api';
import { useAboutPage } from '@/composable/about/useAboutPage';

export default defineComponent({
  setup() {
    const instance = getCurrentInstance();
    const { imgState } = useAboutPage(instance);
    return {
      imgState
    };
  }
});
</script>
