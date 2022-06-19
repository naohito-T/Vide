<template>
  <div>
    <OrganismsHeader />
    <main class="main">
      <PartsWorksMainWorksContent :projects="mockProjects" />
    </main>
    <OrganismsFooter />
    <!-- <PartsWorksFooterWorksContent /> -->
    <AtomsTextAnimationText />
    <OrganismsVerticalSNSIcons />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { mockProjects } from '@/__mocks__';

export default defineComponent({
  setup() {
    return {
      mockProjects
    };
  }
});
</script>
