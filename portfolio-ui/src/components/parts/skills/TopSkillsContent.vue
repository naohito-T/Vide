<template>
  <section>
    <div class="video-wrap">
      <video autoplay muted loop playsinline play class="video-wrap__item">
        <source src="~/assets/image/movie/code.mp4" />
      </video>
      <AtomsTextGlitchText :texts="'GLITCH'" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {}
});
</script>

<style lang="scss" scoped>
.video-wrap {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  &__item {
    position: absolute;
    width: 100vw;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  &-telop {
    position: absolute;
    top: calc(50% - 20px);
    left: 50%;
    color: white;
    transform: translateX(-50%);
  }
}
</style>
