<template>
  <WorksTemplate />
</template>

<script lang="ts">
import {
  defineComponent,
  useAsync,
  useContext,
  useRoute,
  computed,
  onMounted
} from '@nuxtjs/composition-api';
import WorksTemplate from '@/components/template/WorksTemplate.vue';

export default defineComponent({
  components: {
    WorksTemplate
  },
  setup(_, { ctx }) {
    // const { root } = useContext()
    if (process.client) {
      ctx.root.$nuxt.$loading.start();
      setTimeout(() => ctx.root.$nuxt.$loading.finish(), 500);
    }
  }
});
</script>
