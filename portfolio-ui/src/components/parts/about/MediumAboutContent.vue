<!-- about page topから中段にあるコンテンツ -->
<template>
  <PlaceHorizontally>
    <template v-slot:left>
      <p class="vision">Your vision. Unrestricted.</p>
      <div class="left-desc">
        <p class="left-ele">
          Muraflex transforms floor plans into architectural spaces. With a
          European touch, our design-savvy demountable glass office wall systems
          and freestanding pods create a distinguished work environment,
          bringing elegance and purpose together. Rather than permanent drywall,
          benefit from safe, flexible and reconfigurable walls through one of
          our 7 lines: MIMO, FINO and QUADRO our demountable glass partitions,
          EXPO our telescoping door, the versatile demising wall system PLANIKA,
          and finally two freestanding pods: ARCO and ZITTO.
        </p>
      </div>
    </template>
    <template v-slot:right>
      <VerticalText />
    </template>
  </PlaceHorizontally>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import PlaceHorizontally from '@/components/molecules/PlaceHorizontally.vue';
import VerticalText from '@/components/atoms/text/VerticalText.vue';

export default defineComponent({
  components: {
    VerticalText,
    PlaceHorizontally
  },
  setup() {}
});
</script>

<style lang="scss">
.vision {
  font-size: 20px;
  position: absolute;
  top: -40px;
  left: -60px;
}

.left {
  &-desc {
    display: flex;
    align-items: center;
    justify-content: center;

    &-ele {
    }
  }
}
</style>
