<template>
  <div>
    <OrganismsHeader />
    <PartsSkillsTopSkillsContent />
    <main class="main">
      <PartsSkillsMainSkillsContent />
      <PartsSkillsMainSkillsButtomContent />
    </main>
    <PartsSkillsFooterSkillsContent />
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

<style lang="scss" scoped></style>
