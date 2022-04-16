<template>
  <WorksTemplate v-if="timeoutID > 0" />
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from '@nuxtjs/composition-api';
import WorksTemplate from '@/components/template/WorksTemplate.vue';
import { csrLoading } from '@/lib/loading';

export default defineComponent({
  components: {
    WorksTemplate
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
