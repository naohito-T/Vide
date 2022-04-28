<!-- about page topから中段にあるコンテンツ -->
<template>
  <div>
    <!-- 自分の説明 -->
    <MoleculesPlaceHorizontally>
      <template v-slot:left>
        <MoleculesConstitutesTexts
          :title="'What Constitutes Me.'"
          :description="constitutesDesc"
        />
      </template>
      <template v-slot:right>
        <AtomsTextVerticalText :texts="texts" />
      </template>
      <AtomsBackgroundElectrocarDiagramBack />
    </MoleculesPlaceHorizontally>
    <!-- 技術について(Programing) -->
    <MoleculesPlaceHorizontally>
      <template v-slot:left>
        <AtomsTextVerticalText :texts="texts" :rotateClass="'transform90'" />
      </template>
      <template v-slot:right>
        <MoleculesConstitutesTexts :description="programDesc" />
      </template>
      <AtomsBackgroundElectrocarDiagramBack />
    </MoleculesPlaceHorizontally>
    <!-- アクセサリーについて(Accessory) -->
    <MoleculesPlaceHorizontally>
      <template v-slot:left>
        <MoleculesConstitutesTexts :description="accessoryDesc" />
      </template>
      <template v-slot:right>
        <AtomsTextVerticalText :texts="texts" />
      </template>
      <AtomsBackgroundElectrocarDiagramBack />
    </MoleculesPlaceHorizontally>
    <!-- 美容について(Beautify) -->
    <MoleculesPlaceHorizontally>
      <template v-slot:left>
        <AtomsTextVerticalText :texts="texts" :rotateClass="'transform90'" />
      </template>
      <template v-slot:right>
        <MoleculesConstitutesTexts :description="beautifyDesc" />
      </template>
      <AtomsBackgroundElectrocarDiagramBack />
    </MoleculesPlaceHorizontally>
    <!-- 技術ブログについて(tech) -->
    <MoleculesPlaceHorizontally>
      <template v-slot:left>
        <MoleculesConstitutesTexts :description="techDesc" />
      </template>
      <template v-slot:right>
        <AtomsTextVerticalText :texts="texts" />
      </template>
      <AtomsBackgroundElectrocarDiagramBack />
    </MoleculesPlaceHorizontally>
    <!-- 目指しているもの -->
    <MoleculesPlaceHorizontally>
      <template v-slot:left>
        <AtomsTextVerticalText :texts="texts" :rotateClass="'transform90'" />
      </template>
      <template v-slot:right>
        <MoleculesConstitutesTexts :description="techDesc" />
      </template>
      <AtomsBackgroundElectrocarDiagramBack />
    </MoleculesPlaceHorizontally>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { useMainAboutContent } from '@/composable/about/useMainAboutContent';

export default defineComponent({
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

<style lang="scss" scoped></style>
