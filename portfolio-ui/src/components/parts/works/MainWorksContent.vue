<template>
  <OrganismsLayoutImage :projects="projects" />
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';
import { Project } from '@/lib/types';

export default defineComponent({
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
