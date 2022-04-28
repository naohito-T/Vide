<template>
  <TemplateWorksTemplate />
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from '@nuxtjs/composition-api';
import { csrLoading } from '@/lib/loading';

export default defineComponent({
  setup() {
    const instance = getCurrentInstance();
    const { timeoutID } = csrLoading(instance);

    return {};
  }
});
</script>
