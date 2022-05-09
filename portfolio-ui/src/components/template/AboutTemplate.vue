<template>
  <div>
    <OrganismsHeader />
    <PartsAboutTopAboutContent :projects="projects" />
    <AtomsScrollLine />
    <div class="wrapper">
      <PartsAboutSideAboutContent />
      <main class="wrapper-main">
        <PartsAboutMainAboutContent />
      </main>
    </div>
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

<style lang="scss" scoped>
.wrapper {
  display: flex;

  &-main {
    flex: 1; /* サイドから伸ばす */
  }
}
</style>
