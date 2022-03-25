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
          <IconSvg :type="'insta'" />
        </a>
      </li>
      <li class="social_item">
        <a
          class="social_link"
          href="https://www.linkedin.com/company/muraflex/?viewAsMember=true"
          target="_blank"
        >
          <IconSvg :type="'twitter'" />
        </a>
      </li>
      <li class="social_item">
        <a
          class="social_link"
          href="https://www.instagram.com/muraflex/"
          target="_blank"
        >
          <IconSvg :type="'twitter'" />
        </a>
      </li>
      <li class="social_item">
        <a
          class="social_link"
          href="https://www.youtube.com/channel/UCEb8nP0Nn8JhnCIJOldDQ3A?view_as=subscriber"
          target="_blank"
        >
          <IconSvg :type="'insta'" />
        </a>
      </li>
      <li class="social_item">
        <a
          class="social_link"
          href="https://www.pinterest.ca/muraflexinc/"
          target="_blank"
        >
          <IconSvg :type="'insta'" />
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
import IconSvg from '@/components/atoms/IconSvg.vue';

export default defineComponent({
  components: {
    Header,
    IconSvg
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss">
</style>
