<template>
  <AboutTemplate />
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from '@nuxtjs/composition-api';
import AboutTemplate from '@/components/template/AboutTemplate.vue';
import { csrLoading } from '@/lib/loading';

export default defineComponent({
  components: {
    AboutTemplate
  },
  setup() {
    const instance = getCurrentInstance();
    const { timeoutID } = csrLoading(instance);
    return {
      timeoutID
    };
  }
});
</script>
