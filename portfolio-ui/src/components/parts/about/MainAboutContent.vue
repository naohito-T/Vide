<!-- about page topから中段にあるコンテンツ -->
<template>
  <div>
    <!-- 自分の説明 -->
    <PlaceHorizontally>
      <template v-slot:left>
        <MyVisionTexts />
      </template>
      <template v-slot:right>
        <VerticalText :texts="texts" />
      </template>
    </PlaceHorizontally>
    <!-- 技術について(Programing) -->
    <PlaceHorizontally>
      <template v-slot:left>
        <VerticalText :texts="texts" :rotateClass="'transform90'" />
      </template>
      <template v-slot:right>
        <p>hell</p>
      </template>
    </PlaceHorizontally>
    <!-- アクセサリーについて(Accessory) -->
    <PlaceHorizontally>
      <template v-slot:left>
        <p>hello</p>
      </template>
      <template v-slot:right>
        <VerticalText :texts="texts" />
      </template>
    </PlaceHorizontally>
    <!-- 美容について(Accessory) -->
    <PlaceHorizontally>
      <template v-slot:left>
        <VerticalText :texts="texts" />
      </template>
      <template v-slot:right>
        <p>hello</p>
      </template>
    </PlaceHorizontally>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import PlaceHorizontally from '@/components/molecules/PlaceHorizontally.vue';
import VerticalText from '@/components/atoms/text/VerticalText.vue';
import MyVisionTexts from '@/components/molecules/MyVisionTexts.vue';
import { useMainAboutContent } from '@/composable/about/useMainAboutContent';

export default defineComponent({
  components: {
    VerticalText,
    PlaceHorizontally,
    MyVisionTexts
  },
  setup() {
    const { texts } = useMainAboutContent();
    return {
      texts
    };
  }
});
</script>

<style lang="scss" scoped>
</style>
