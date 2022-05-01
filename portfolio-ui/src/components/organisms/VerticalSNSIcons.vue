<template>
  <ul class="social">
    <li class="social-item">
      <a
        class="social-item__link"
        href="https://www.instagram.com/xx.naohito_t/"
        target="_blank"
      >
        <AtomsIconSvg :type="'insta'" />
      </a>
    </li>
    <li class="social-item">
      <a
        class="social-item__link"
        href="https://twitter.com/naohito___T/"
        target="_blank"
      >
        <AtomsIconSvg :type="'twitter'" />
      </a>
    </li>
    <li class="social-item">
      <a class="social-item__link" href="" target="_blank">
        <AtomsIconSvg :type="'blog'" />
      </a>
    </li>
    <li class="social-item">
      <a
        class="social-item__link"
        href="https://github.com/naohito-T/"
        target="_blank"
      >
        <AtomsIconSvg :type="'github'" />
      </a>
    </li>
    <!-- https://webliker.info/99276/ -->
    <li class="social-item">
      <a
        class="social-item__link"
        href="mailto:naoihito.tanaka@gmail.com"
        target="_blank"
      >
        <AtomsIconSvg :type="'gmail'" />
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
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
