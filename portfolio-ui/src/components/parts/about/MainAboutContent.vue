<!-- about page topから中段にあるコンテンツ -->
<template>
  <div>
    <!-- 自分の説明 -->
    <PlaceHorizontally>
      <template v-slot:left>
        <ConstitutesTexts
          :title="'What Constitutes Me.'"
          :description="constitutesDesc"
        />
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
        <ConstitutesTexts :description="programDesc" />
      </template>
    </PlaceHorizontally>
    <!-- アクセサリーについて(Accessory) -->
    <PlaceHorizontally>
      <template v-slot:left>
        <ConstitutesTexts :description="accessoryDesc" />
      </template>
      <template v-slot:right>
        <VerticalText :texts="texts" />
      </template>
    </PlaceHorizontally>
    <!-- 美容について(Beautify) -->
    <PlaceHorizontally>
      <template v-slot:left>
        <VerticalText :texts="texts" :rotateClass="'transform90'" />
      </template>
      <template v-slot:right>
        <ConstitutesTexts :description="beautifyDesc" />
      </template>
    </PlaceHorizontally>
    <!-- 技術ブログについて(tech) -->
    <PlaceHorizontally>
      <template v-slot:left>
        <ConstitutesTexts :description="techDesc" />
      </template>
      <template v-slot:right>
        <VerticalText :texts="texts" />
      </template>
    </PlaceHorizontally>
    <!-- 目指しているもの -->
    <PlaceHorizontally>
      <template v-slot:left>
        <p>hello</p>
      </template>
      <template v-slot:right>
        <VerticalText :texts="texts" />
      </template>
    </PlaceHorizontally>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import PlaceHorizontally from '@/components/molecules/PlaceHorizontally.vue';
import VerticalText from '@/components/atoms/text/VerticalText.vue';
import ConstitutesTexts from '@/components/molecules/ConstitutesTexts.vue';
import { useMainAboutContent } from '@/composable/about/useMainAboutContent';

export default defineComponent({
  components: {
    VerticalText,
    PlaceHorizontally,
    ConstitutesTexts
  },
  setup() {
    const {
      texts,
      constitutesDesc,
      programDesc,
      accessoryDesc,
      beautifyDesc,
      techDesc
    } = useMainAboutContent();
    return {
      texts,
      constitutesDesc,
      programDesc,
      accessoryDesc,
      beautifyDesc,
      techDesc
    };
  }
});
</script>

<style lang="scss" scoped>
</style>
