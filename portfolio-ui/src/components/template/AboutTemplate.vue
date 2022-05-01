<template>
  <div>
    <OrganismsHeader />
    <PartsAboutTopAboutContent :image-urls="imageURLs" />
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

export default defineComponent({
  props: {
    imageURLs: {
      type: Array as PropType<String[]>,
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
