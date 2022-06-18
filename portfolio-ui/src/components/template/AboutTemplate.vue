<template>
  <div>
    <OrganismsHeader />
    <PartsAboutTopAboutContent :projects="projects" />
    <!-- <PartsAboutMainAboutContent /> -->
    <PartsAboutMainAboutContent2 />
    <OrganismsFooter />
    <AtomsTextAnimationText />
    <OrganismsVerticalSNSIcons />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';
import { AboutPageProject } from '@/lib/types';

export default defineComponent({
  props: {
    projects: {
      type: Array as PropType<AboutPageProject[]>,
      required: true
    }
  },
  setup() {
    return {};
  }
});
</script>

