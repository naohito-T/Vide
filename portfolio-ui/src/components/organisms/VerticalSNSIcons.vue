<template>
  <ul class="social">
    <li class="social-item">
      <a class="social-item__link" href="" target="_blank">
        <IconSvg :type="'insta'" />
      </a>
    </li>
    <li class="social-item">
      <a class="social-item__link" href="" target="_blank">
        <IconSvg :type="'twitter'" />
      </a>
    </li>
    <li class="social-item">
      <a class="social-item__link" href="" target="_blank">
        <IconSvg :type="'blog'" />
      </a>
    </li>
    <li class="social-item">
      <a
        class="social-item__link"
        href="https://github.com/naohito-T/"
        target="_blank"
      >
        <IconSvg :type="'github'" />
      </a>
    </li>
    <li class="social-item">
      <a class="social-item__link" href="" target="_blank">
        <IconSvg :type="'gmail'" />
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

<style lang="scss" scoped>
.social {
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 20px 30px;
  z-index: 1;

  &-item {
    margin: 5px 0;
  }
}
</style>
