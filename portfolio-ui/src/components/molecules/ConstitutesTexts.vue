<template>
  <div class="container">
    <p v-if="title" class="container-vision">What Constitutes Me.</p>
    <div class="container-vision__desc">
      <p class="container-vision-ele">
        Muraflex transforms floor plans into architectural spaces. With a
        European touch, our design-savvy demountable glass office wall systems
        and freestanding pods create a distinguished work environment, bringing
        elegance and purpose together. Rather than permanent drywall, benefit
        from safe, flexible and reconfigurable walls through one of our 7 lines:
        MIMO, FINO and QUADRO our demountable glass partitions, EXPO our
        telescoping door, the versatile demising wall system PLANIKA, and
        finally two freestanding pods: ARCO and ZITTO.
      </p>
      <!-- <TwoVerticalLines /> -->
    </div>
    <ElectrocarDiogramBack />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
// import TwoVerticalLines from '@/components/molecules/line/TwoVerticalLines.vue';
import ElectrocarDiogramBack from '@/components/atoms/background/ElectrocarDiogramBack.vue';

export default defineComponent({
  components: {
    // TwoVerticalLines,
    ElectrocarDiogramBack
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      required: true
    }
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  height: 100%;

  &-vision {
    @include positionAbsWithTopLeft(-10px, -150px);
    @include fontSizeWithWhiteSpaceAndZIndex(4vw, nowrap, 2);

    &__desc {
      @include displayFlex(center, row, center);
      height: 100%;
    }
  }
}
</style>
