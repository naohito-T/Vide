<template>
  <div>
    <OrganismsHeader />
    <PartsAboutTopAboutContent />
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
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
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
