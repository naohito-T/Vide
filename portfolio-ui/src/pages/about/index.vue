<template>
  <TemplateAboutTemplate />
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  onMounted
} from '@nuxtjs/composition-api';
import { csrLoading } from '@/lib/loading';
import { URLAnimation } from '@/utils';

export default defineComponent({
  setup() {
    const instance = getCurrentInstance();
    const { timeoutID } = csrLoading(instance);
    onMounted(() => {
      const urlAnimation = new URLAnimation();
      urlAnimation.animation();
    });
    return {
      timeoutID
    };
  }
});
</script>
