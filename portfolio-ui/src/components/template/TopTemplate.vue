<template>
  <div>
    <OrganismsHeader />
    <PartsTopMainTopContent :debug-state="debugState" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import { arrayFactorys } from '@/utils';

export default defineComponent({
  setup() {
    const debugState = ref<string[]>([]);
    debugState.value = arrayFactorys(
      'https://source.unsplash.com/VkwRmha1_tI/800x533',
      5
    );
    return {
      debugState
    };
  }
});
</script>

<style lang="scss" scoped></style>
