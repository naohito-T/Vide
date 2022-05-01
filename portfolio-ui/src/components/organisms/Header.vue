<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav-item">
        <li v-if="currentRoute === '/skills'" class="nav-item__left">
          <AtomsTextShineChar v-if="slug" :texts="currentRoute" />
        </li>
        <li v-else>
          <nuxt-link to="/skills"
            ><p class="nav-item__text">Skills</p></nuxt-link
          >
        </li>

        <li v-if="currentRoute === '/works'" class="nav-item__center">
          <AtomsTextShineChar v-if="slug" :texts="currentRoute" />
        </li>
        <li v-else>
          <nuxt-link to="/works"><p class="nav-item__text">Works</p></nuxt-link>
        </li>

        <li v-if="currentRoute === '/about'" class="nav-item__right">
          <AtomsTextShineChar v-if="slug" :texts="currentRoute" />
        </li>
        <li v-else>
          <nuxt-link to="/about"><p class="nav-item__text">About</p></nuxt-link>
        </li>
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
    /** slug page時 & top時は headerに表示させない */
    const slug = computed(
      () => currentRoute.value.length <= 7 && currentRoute.value !== '/'
    );
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

      &__text {
        font-size: getPcVW(23);

        @include sp {
          font-size: getSpVW(18);
          padding: 20px 30px;
        }
      }

      &__left {
        @include sp {
          width: 100%;
          margin-left: 20px;
        }
      }
      &__center {
        @include sp {
          width: 100%;
          margin-left: 22px;
        }
      }
      &__right {
        @include sp {
          width: 100%;
          padding-left: 12px;
        }
      }
    }
  }
}
</style>
