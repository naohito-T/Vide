<template>
  <section class="about-block">
    <AtomsTextFadeInTitle :gsap-id="gsapId" :title="title" />
    <div class="about-block-desc">
      <div class="about-block-desc__en">
        <p class="en" id="en_de">{{ descEn }}</p>
      </div>
      <div class="about-block-desc__ja">
        <p class="ja" id="en_ja">{{ descJa }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, nextTick } from '@nuxtjs/composition-api';
import { AppGlobalGSAP, pinZoom } from '@/lib/gsap';

export default defineComponent({
  props: {
    gsapId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    descEn: {
      type: String,
      required: true
    },
    descJa: {
      type: String,
      required: true
    }
  },
  setup() {
    const gsap = new AppGlobalGSAP().getGSAP;

    onMounted(() => {
      Promise.all([nextTick()]).then(() => {
        /** pinどめさせる */
        pinZoom(gsap);
        gsap.effects.pinOver('#en_de', { trigger: '#en_de' });
      });
    });
  }
});
</script>

<style lang="scss" scoped>
.about-block {
  @include displayFlex(center, row, center);
  color: #ccc;
  padding: 60px 20px 10px;
  height: 80vh;

  &-desc {
    @include displayFlex(center, column, center);

    &__en {
    }
    &__ja {
    }
  }
}
</style>
