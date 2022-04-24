<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav-item">
        <nuxt-link to="/skills" v-if="currentRoute !== '/skills'"
          ><p>Skills</p></nuxt-link
        >
        <nuxt-link to="/works" v-if="currentRoute !== '/works'"
          ><p>Works</p></nuxt-link
        >
        <AtomsTextShineChar v-if="slug" :texts="currentRoute" />
        <nuxt-link to="/about" v-if="currentRoute !== '/about'"
          ><p>About</p></nuxt-link
        >
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, useContext, computed } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const { route } = useContext();
    const currentRoute = computed(() => route.value.path);
    /** slug pageの時はheaderに表示させない */
    const slug = computed(() => currentRoute.value.length <= 7);
    return {
      currentRoute,
      slug
    };
  }
});
</script>

<style lang="scss" scoped>
.header {
  width: 100vw;
  height: 100px;
  position: fixed;
  z-index: 10;

  .nav {
    height: 100%; // 100%にしないと親要素に合わない

    &-item {
      @include displayFlex(center, row, space-between);
      padding: 20px 30px;

      @include sp {
        font-size: getSpVW(18);
        padding: 20px 35px;
      }
    }
  }
}
</style>
