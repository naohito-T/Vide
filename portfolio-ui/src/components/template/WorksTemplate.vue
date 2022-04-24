<template>
  <div>
    <OrganismsHeader />
    <main class="main">
      <PartsWorksMainWorksContent :projects="mockProjects" />
    </main>
    <OrganismsVerticalSNSIcons />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { mockProjects } from '@/__mocks__';

export default defineComponent({
  setup() {
    return {
      mockProjects
    };
  }
});
</script>
<style lang="scss" scoped>
.main {
  padding-top: 100px;
}
</style>
