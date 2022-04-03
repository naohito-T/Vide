<template>
  <LayoutImage :projects="projects" />
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';
import LayoutImage from '@/components/organisms/LayoutImage.vue';
import { Project } from '@/lib/types';

export default defineComponent({
  components: {
    LayoutImage
  },
  props: {
    projects: {
      type: Array as PropType<Project[]>,
      required: true
    }
  },
  setup() {
    return {};
  }
});
</script>
