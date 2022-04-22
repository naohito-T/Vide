<!--
@desc CSR用のカスタムローディング コンポーネント
-->
<template>
  <div v-if="isLoading" class="loading">
    <div class="loading-spinner">
      <div class="loading-spinner-outer">
        <div class="loading-spinner-outer__inner tl"></div>
        <div class="loading-spinner-outer__inner tr"></div>
        <div class="loading-spinner-outer__inner br"></div>
        <div class="loading-spinner-outer__inner bl"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, provide } from '@nuxtjs/composition-api';
import { useLoading, UseLoadingType, LoadingKey } from '@/lib/loading';

export default defineComponent({
  setup() {
    // const isLoading = ref(false);
    // const start = () => (isLoading.value = true);
    // const finish = () => (isLoading.value = false);
    // return { isLoading, start, finish };
    provide(LoadingKey, useLoading());
    const { isLoading, start, finish } = inject(LoadingKey) as UseLoadingType;
    return { isLoading, start, finish };
  }
});
</script>
<style lang="scss" scoped>
.loading {
  height: 100vh;

  &-spinner {
    position: absolute;
    width: 128px;
    height: 128px;
    top: calc(50% - 64px);
    left: calc(50% - 64px);
    transform: perspective(206px) rotateX(45deg);

    &-outer {
      box-sizing: border-box;
      animation: spin 3s linear infinite;
      height: 100%;

      &__inner {
        position: absolute;
        border-radius: 50%;
        width: 64px;
        height: 64px;
        animation: spin 1.8s ease-in-out infinite;

        &.tl {
          top: 0;
          left: 0;
          border-top: 2px solid #531430;
          border-left: 4px solid #531430;
        }
        &.tr {
          top: 0;
          right: 0;
          border-top: 2px solid #e04960;
          border-right: 4px solid #e04960;
        }
        &.br {
          bottom: 0;
          right: 0;
          border-bottom: 2px solid #531430;
          border-right: 4px solid #531430;
        }
        &.bl {
          bottom: 0;
          left: 0;
          border-bottom: 2px solid #e04960;
          border-left: 4px solid #e04960;
        }
      }
    }
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
