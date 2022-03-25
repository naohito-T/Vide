<template>
  <div>
    <Header />

    <ul class="social">
      <li class="social_item">
        <a
          class="social_link"
          href="https://www.facebook.com/muraflex/"
          target="_blank"
        >
          <svg role="img" aria-label="Facebook">
            <use xlink:href="@/assets/image/instagram.svg#instagram"></use>
          </svg>
        </a>
      </li>
      <li class="social_item">
        <a
          class="social_link"
          href="https://www.linkedin.com/company/muraflex/?viewAsMember=true"
          target="_blank"
        >
          <svg role="img" aria-label="LinkedIn">
            <use xlink:href=""></use>
          </svg>
        </a>
      </li>
      <li class="social_item">
        <a
          class="social_link"
          href="https://www.instagram.com/muraflex/"
          target="_blank"
        >
          <svg role="img" aria-label="Instagram">
            <use xlink:href="assets/images/sprite.svg#social-instagram"></use>
          </svg>
        </a>
      </li>
      <li class="social_item">
        <a
          class="social_link"
          href="https://www.youtube.com/channel/UCEb8nP0Nn8JhnCIJOldDQ3A?view_as=subscriber"
          target="_blank"
        >
          <svg role="img" aria-label="YouTube">
            <use xlink:href="assets/images/sprite.svg#social-youtube"></use>
          </svg>
        </a>
      </li>
      <li class="social_item">
        <a
          class="social_link"
          href="https://www.pinterest.ca/muraflexinc/"
          target="_blank"
        >
          <svg role="img" aria-label="Pinterest">
            <use xlink:href="assets/images/sprite.svg#social-pinterest"></use>
          </svg>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useAsync,
  useContext,
  useRoute,
  computed
} from '@nuxtjs/composition-api';
import Header from '@/components/organisms/Header.vue';

export default defineComponent({
  components: {
    Header
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss">
</style>
