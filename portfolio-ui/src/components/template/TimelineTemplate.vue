<template>
  <div>
    <OrganismsHeader />
    <PartsTimelineTopTimelineContent />
    <main class="main">
      <PartsTimelineMainTimelineContent />
    </main>
    <OrganismsFooter />
    <AtomsTextAnimationText />
    <OrganismsVerticalSNSIcons />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {}
});
</script>

<style lang="scss" scoped>
.main {
  overflow: hidden;
}
</style>
