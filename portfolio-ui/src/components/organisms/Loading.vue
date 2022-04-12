<template>
  <div v-if="isLoading" class="spinner">
    <div class="outer">
      <div class="inner tl"></div>
      <div class="inner tr"></div>
      <div class="inner br"></div>
      <div class="inner bl"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    // onMounted(() => {
    //   // .$nextTickは、DOMを更新後、その更新済みのDOMに対して何らかの処理をすることが可能です。
    //   window.$nuxt.$nextTick(() => {
    //     if (process.client) {
    //       window.$nuxt.$loading.start();
    //     }
    //   });
    // });

    const isLoading = ref(false);
    // if (process.client) {
    const start = () => (isLoading.value = true);
    // const finish = () => (isLoading.value = false);
    const finish = () => setTimeout(() => (isLoading.value = false), 5000);
    // }

    return { isLoading, start, finish };
  }
});
</script>
<style lang="scss" scoped>
// html {
//   background-image: radial-gradient(
//     circle farthest-corner at center,
//     #0d0814 0%,
//     #120e29 100%
//   );
//   height: 100%;
// }

.spinner {
  position: absolute;
  width: 128px;
  height: 128px;
  top: calc(50% - 64px);
  left: calc(50% - 64px);
  transform: perspective(206px) rotateX(45deg);
}

.outer {
  box-sizing: border-box;
  animation: spin 3s linear infinite;
  height: 100%;
}

.inner {
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

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
