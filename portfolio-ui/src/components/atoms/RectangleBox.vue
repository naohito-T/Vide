<template>
  <div class="card">
    <p>{{ currentRoute }}</p>
    <!-- <h2>Stacked cards</h2>
          <p>Stacked rainbow cards made with box-shadow</p> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    text: {
      type: String,
      required: false
    }
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.card {
  background-color: var(--background);
  cursor: pointer;
  padding: 15px;
  border: 3px solid var(--primary);
  box-shadow: 10px -10px 0 -3px var(--background), 10px -10px var(--green),
    20px -20px 0 -3px var(--background), 20px -20px var(--yellow),
    30px -30px 0 -3px var(--background), 30px -30px var(--orange),
    40px -40px 0 -3px var(--background), 40px -40px var(--red);
}

.card:hover {
  animation: shadow-wave 1s ease infinite;
}

@keyframes shadow-wave {
  0% {
    border: 3px solid var(--primary);
    box-shadow: 10px -10px 0 -3px var(--background), 10px -10px var(--green),
      20px -20px 0 -3px var(--background), 20px -20px var(--yellow),
      30px -30px 0 -3px var(--background), 30px -30px var(--orange),
      40px -40px 0 -3px var(--background), 40px -40px var(--red);
  }
  20% {
    border: 3px solid var(--red);
    box-shadow: 10px -10px 0 -3px var(--background), 10px -10px var(--primary),
      20px -20px 0 -3px var(--background), 20px -20px var(--green),
      30px -30px 0 -3px var(--background), 30px -30px var(--yellow),
      40px -40px 0 -3px var(--background), 40px -40px var(--orange);
  }
  40% {
    border: 3px solid var(--orange);
    box-shadow: 10px -10px 0 -3px var(--background), 10px -10px var(--red),
      20px -20px 0 -3px var(--background), 20px -20px var(--primary),
      30px -30px 0 -3px var(--background), 30px -30px var(--green),
      40px -40px 0 -3px var(--background), 40px -40px var(--yellow);
  }
  60% {
    border: 3px solid var(--yellow);
    box-shadow: 10px -10px 0 -3px var(--background), 10px -10px var(--orange),
      20px -20px 0 -3px var(--background), 20px -20px var(--red),
      30px -30px 0 -3px var(--background), 30px -30px var(--primary),
      40px -40px 0 -3px var(--background), 40px -40px var(--green);
  }
  80% {
    border: 3px solid var(--green);
    box-shadow: 10px -10px 0 -3px var(--background), 10px -10px var(--yellow),
      20px -20px 0 -3px var(--background), 20px -20px var(--orange),
      30px -30px 0 -3px var(--background), 30px -30px var(--red),
      40px -40px 0 -3px var(--background), 40px -40px var(--primary);
  }
  100% {
    border: 3px solid var(--primary);
    box-shadow: 10px -10px 0 -3px var(--background), 10px -10px var(--green),
      20px -20px 0 -3px var(--background), 20px -20px var(--yellow),
      30px -30px 0 -3px var(--background), 30px -30px var(--orange),
      40px -40px 0 -3px var(--background), 40px -40px var(--red);
  }
}
</style>
