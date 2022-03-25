<template>
  <ul class="social">
    <li class="social-item">
      <a
        class="social-item__link"
        href="https://www.facebook.com/muraflex/"
        target="_blank"
      >
        <IconSvg :type="'insta'" />
      </a>
    </li>
    <li class="social-item">
      <a
        class="social-item__link"
        href="https://www.linkedin.com/company/muraflex/?viewAsMember=true"
        target="_blank"
      >
        <IconSvg :type="'twitter'" />
      </a>
    </li>
    <li class="social-item">
      <a
        class="social-item__link"
        href="https://www.instagram.com/muraflex/"
        target="_blank"
      >
        <IconSvg :type="'blog'" />
      </a>
    </li>
    <li class="social-item">
      <a
        class="social-item__link"
        href="https://www.youtube.com/channel/UCEb8nP0Nn8JhnCIJOldDQ3A?view_as=subscriber"
        target="_blank"
      >
        <IconSvg :type="'github'" />
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import IconSvg from '@/components/atoms/IconSvg.vue';

export default defineComponent({
  components: {
    IconSvg
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss">
.social {
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 20px 30px;
  &-item {
    margin: 5px 0;
  }
}
</style>
