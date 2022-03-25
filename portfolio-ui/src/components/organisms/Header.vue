<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav-item">
        <nuxt-link to="/" v-if="currentRoute !== '/'"><p>Top</p></nuxt-link>
        <nuxt-link to="/works" v-if="currentRoute !== '/works'"
          ><p>Works</p></nuxt-link
        >
        <ShineChar :texts="currentRoute" />
        <nuxt-link to="/about" v-if="currentRoute !== '/about'"
          ><p>About</p></nuxt-link
        >
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, useContext, computed } from '@nuxtjs/composition-api';
import ShineChar from '@/components/atoms/ShineChar.vue';

export default defineComponent({
  components: {
    ShineChar
  },
  setup() {
    const { route } = useContext();
    const currentRoute = computed(() => route.value.path);
    return {
      currentRoute
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
    }
  }
}
</style>
