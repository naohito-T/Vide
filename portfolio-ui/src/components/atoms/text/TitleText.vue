<template>
  <div class="wrap">
    <h2 class="wrap-title">{{ title }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    title: {
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
.wrap {
  @include displayFlex(center, column, center);
  margin-bottom: 20px;

  &-title {
    @include sp {
      font-size: getSpVW(40);
    }
  }
}
</style>
