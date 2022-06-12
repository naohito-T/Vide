<template>
  <div class="b2">
    <img
      src="https://i.scdn.co/image/ab67616d00001e02d9194aa18fa4c9362b47464f"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, nextTick } from '@nuxtjs/composition-api';
import { AppGlobalGSAP, pinZoom } from '@/lib/gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineComponent({
  setup() {
    const gsap = new AppGlobalGSAP().getGSAP;

    onMounted(() => {
      Promise.all([nextTick()]).then(() => {
        /** pinどめさせる */
        // pinZoom(gsap);
        // gsap.effects.pinOver('#en_de', { trigger: '#en_de' });
        ScrollTrigger.create({
          trigger: '.b2',
          pin: true,
          scrub: true,
          anticipatePin: 1,
          end: 'bottom 30%',
          invalidateOnRefresh: true
        });
      });
    });
  }
});
</script>
