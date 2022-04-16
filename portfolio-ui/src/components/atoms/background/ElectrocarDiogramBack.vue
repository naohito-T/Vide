<!-- 心電図SVG -->
<template>
  <div class="electrocar">
    <svg
      version="1.2"
      height="300"
      width="600"
      xmlns="http://www.w3.org/2000/svg"
      viewport="0 0 60 60"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path
        id="pulsar"
        stroke="rgba(0,155,155,1)"
        fill="none"
        stroke-width="1"
        stroke-linejoin="round"
        d="M0,90L250,90Q257,60 262,87T267,95 270,88 273,92t6,35 7,-60T290,127 297,107s2,-11 10,-10 1,1 8,-10T319,95c6,4 8,-6 10,-17s2,10 9,11h210"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {}
});
</script>

<style lang="scss" scoped>
.electrocar {
  @include positionAbsWithBottomLeft(0, 0);

  width: 100%;
  margin: 0 auto;
  padding: 0;
}

.electrocar svg {
  width: 100%;
}

.electrocar #pulsar {
  stroke-dasharray: 281;
  animation: dash 2.5s infinite linear forwards;
}

/*Animation*/
@keyframes dash {
  from {
    stroke-dashoffset: 814;
  }
  to {
    stroke-dashoffset: -814;
  }
}
</style>
