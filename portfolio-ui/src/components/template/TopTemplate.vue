<template>
  <div>
    <main class="container">
      <OrganismsHeader />
      <PartsTopFooterTopContent />
      <PartsTopMainTopContent :debug-state="debugState" />
      <AtomsTextAnimationText />
    </main>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useContext,
  ref,
  computed
} from '@nuxtjs/composition-api';
import { arrayFactorys } from '@/utils';

export default defineComponent({
  setup() {
    const { app } = useContext();
    const debugState = ref<string[]>([]);
    debugState.value = arrayFactorys(
      'https://source.unsplash.com/VkwRmha1_tI/800x533',
      5
    );
    const date = computed(() => {
      return app.$stores.home.snapList;
    });
    console.log(`top template${JSON.stringify(date)}`);
    console.log(`debugState.value${debugState.value}`);

    return {
      debugState
    };
  }
});
</script>

<style lang="scss" scoped>
.container {
  width: 99vw;
  height: 100vh;
  overscroll-behavior: none;
  display: flex;
  flex-wrap: nowrap;
}

.red {
  background-color: red;
  width: 99vw;
  height: 100vh;
}
</style>
