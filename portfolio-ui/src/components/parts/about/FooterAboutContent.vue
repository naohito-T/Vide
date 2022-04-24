<template>
  <!-- v-slotでlayout変える -->
  <MoleculesMaxWindowFooter>
    <template v-slot:footer>
      <OrganismsFooter />
    </template>
  </MoleculesMaxWindowFooter>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {}
});
</script>

<style lang="scss" scoped></style>
