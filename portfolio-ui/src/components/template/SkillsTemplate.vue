<template>
  <div>
    <OrganismsHeader />
    <OrganismsVerticalSNSIcons />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api';
import { gsap } from 'gsap';
import { domSelect, domSelectAll } from '@/utils';
import { commonErrorHandler, NullPointerError } from '@/lib/error';

export default defineComponent({
  setup() {
    onMounted(() => {});
  }
});
</script>

<style lang="scss" scoped>
svg {
  width: 100%;
  height: 100%;
  visibility: hidden;
}

.p {
  stroke: #00b0f8;
  stroke-width: 1px;
  /* stroke-linecap: round; */
  /* 	mix-blend-mode: overlay; */
}

#ring {
  fill: none;
  /* mix-blend-mode: overlay; */
  stroke-width: 2px;
  stroke: #00e3ff;
  stroke-linecap: round;
  /* stroke-dasharray: 12 4; */
}
</style>
