<!-- 作品集左 -->
<!-- Work?左 -->
<template>
  <MoleculesPlaceHorizontally>
    <template v-slot:left>
      <p>Hello</p>
    </template>
    <template v-slot:right>
      <p>Hello</p>
    </template>
  </MoleculesPlaceHorizontally>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {}
});
</script>
