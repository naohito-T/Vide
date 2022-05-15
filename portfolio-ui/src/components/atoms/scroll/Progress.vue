<!-- プログレスバー -->
<template>
  <progress class="scroll-indicator" max="100" value=""></progress>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted } from '@nuxtjs/composition-api';
import { AppGlobalGSAP } from '@/lib/gsap';

export default defineComponent({
  // https://nullnull.dev/blog/gsap-scroll-progress-bar/
  setup() {
    onMounted(async () => {
      const gsap = new AppGlobalGSAP().getGSAP;
      await nextTick();
      await gsap.to('.scroll-indicator', {
        value: 100, // 最大値
        ease: 'none', // イージング
        scrollTrigger: {
          scrub: 0.3 // 追いつくまでの時間
        }
      });
    });
    return {};
  }
});
</script>

<style lang="scss" scoped>
.scroll-indicator {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: transparent;
  border: none;
  height: 0.3rem;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}

.scroll-indicator::-webkit-progress-bar {
  background: transparent;
}

.scroll-indicator::-webkit-progress-value {
  background-image: linear-gradient(
    to bottom right,
    #c7bce6 0%,
    #c8bce6 8.1%,
    #c9bbe5 15.5%,
    #cbbbe5 22.5%,
    #cebae3 29%,
    #d2b9e2 35.3%,
    #d5b8e0 41.2%,
    #d9b7de 47.1%,
    #ddb6dc 52.9%,
    #e0b5d9 58.8%,
    #e3b4d6 64.7%,
    #e6b3d4 71%,
    #e8b3d1 77.5%,
    #eab2d0 84.5%,
    #ebb2ce 91.9%,
    #ebb2ce 100%
  );
  background-attachment: fixed;
  border-radius: 0.4rem;
}

.scroll-indicator::-moz-progress-bar {
  background-image: linear-gradient(
    to bottom right,
    #c7bce6 0%,
    #c8bce6 8.1%,
    #c9bbe5 15.5%,
    #cbbbe5 22.5%,
    #cebae3 29%,
    #d2b9e2 35.3%,
    #d5b8e0 41.2%,
    #d9b7de 47.1%,
    #ddb6dc 52.9%,
    #e0b5d9 58.8%,
    #e3b4d6 64.7%,
    #e6b3d4 71%,
    #e8b3d1 77.5%,
    #eab2d0 84.5%,
    #ebb2ce 91.9%,
    #ebb2ce 100%
  );
  background-attachment: fixed;
  border-radius: 0.4rem;
}
</style>
