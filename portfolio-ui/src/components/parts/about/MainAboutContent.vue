<!-- about page topから中段にあるコンテンツ -->
<template>
  <div>
    <!-- 自分の説明 -->
    <PlaceHorizontally>
      <template v-slot:left>
        <MyVisionTexts />
      </template>
      <template v-slot:right>
        <VerticalText />
      </template>
    </PlaceHorizontally>
    <!-- 技術について -->
    <PlaceHorizontally>
      <template v-slot:left>
        <p>hello</p>
      </template>
      <template v-slot:right>
        <p>hell</p>
      </template>
    </PlaceHorizontally>
    <!-- 技術について -->
    <PlaceHorizontally>
      <template v-slot:left>
        <p>hello</p>
      </template>
      <template v-slot:right>
        <p>hell</p>
      </template>
    </PlaceHorizontally>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import PlaceHorizontally from '@/components/molecules/PlaceHorizontally.vue';
import VerticalText from '@/components/atoms/text/VerticalText.vue';
import MyVisionTexts from '@/components/molecules/MyVisionTexts.vue';

export default defineComponent({
  components: {
    VerticalText,
    PlaceHorizontally,
    MyVisionTexts
  },
  setup() {}
});
</script>

<style lang="scss" scoped>
</style>
