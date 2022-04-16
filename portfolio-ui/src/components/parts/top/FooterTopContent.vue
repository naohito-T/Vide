<template>
  <!-- プログレスバーにする -->
  <footer class="fotter">
    <p>maimaimai</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.fotter {
  z-index: 10;
  position: absolute; /*←絶対位置*/
  bottom: 0; /*下に固定*/
}
</style>
