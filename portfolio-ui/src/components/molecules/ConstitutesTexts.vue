<template>
  <div class="container">
    <p v-if="title" class="container-vision">{{ title }}</p>
    <div class="container-vision__desc">
      <p class="container-vision-ele">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
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

    @include sp {
      @include positionAbsWithTopLeft(-130px, 0px);
      font-size: getSpVW(25);
      padding: 0 10px;
    }

    &__desc {
      @include displayFlex(center, row, center);
      height: 100%;

      @include sp {
        padding: 0 20px;
      }
    }
  }
}
</style>
