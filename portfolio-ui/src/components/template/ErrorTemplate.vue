<template>
  <div>
    <OrganismsHeader />
    <main class="main">
      <div class="error">
        <p class="error-title">{{ title }}</p>
        <p class="error-desc">{{ description }}</p>
        <div class="error-button">
          <AtomsButtonChaseLineButton :btnText="'TOP'" :to="'/'" />
        </div>
      </div>
    </main>
    <OrganismsVerticalSNSIcons />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  setup() {
    return {};
  }
});
</script>
<style lang="scss" scoped>
.main {
  width: 100vw;
  height: 100vh;
}

.error {
  @include displayFlex(center, column, center);
  height: 100vh;

  &-title {
    @include sp {
      font-size: getSpVW(25);
    }
  }

  &-desc {
    margin-bottom: 50px;
    @include sp {
      font-size: getSpVW(16);
    }
  }
}
</style>
