<template>
  <section>
    <div class="video-wrap">
      <video autoplay muted loop playsinline play class="video-wrap__item">
        <source src="~/assets/image/movie/code.mp4" />
      </video>
      <AtomsTextGlitchText :texts="'GLITCH'" />
      <AtomsScrollLine :right="'50%'" />
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
  @include positionRelativeBox(100vh, 100vw);
  overflow: hidden;

  &__item {
    @include positionAbsWithTopLeft(0, 0);
    height: 100vh;
    width: 100vw;
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
