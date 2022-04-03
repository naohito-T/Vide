<template>
  <div class="wrap" @click.stop="onClick">
    <a class="wrap-btn">
      {{ btnText }}
      <span class="line-1"></span>
      <span class="line-2"></span>
      <span class="line-3"></span>
      <span class="line-4"></span>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

/**
 * @desc 線同士が追いかけるbutton
 */

export default defineComponent({
  props: {
    btnText: {
      type: String,
      default: 'LEARN MORE'
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss">
.wrap {
  text-align: center;
  margin-top: 200px;

  &-btn {
    position: relative;
    padding: 20px 70px;
    border: 1px solid white;
    color: white;
    text-decoration: none;
    font-size: em(18px);
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    -webkit-font-smoothing: antialiased;

    &:hover {
      border: none;

      .line-1 {
        animation: move1 1500ms infinite ease;
      }

      .line-2 {
        animation: move2 1500ms infinite ease;
      }

      .line-3 {
        animation: move3 1500ms infinite ease;
      }

      .line-4 {
        animation: move4 1500ms infinite ease;
      }
    }
  }

  .line-1 {
    content: '';
    display: block;
    position: absolute;
    width: 1px;
    background-color: white;
    left: 0;
    bottom: 0;
  }
  .line-2 {
    content: '';
    display: block;
    position: absolute;
    height: 1px;
    background-color: white;
    left: 0;
    top: 0;
  }
  .line-3 {
    content: '';
    display: block;
    position: absolute;
    width: 1px;
    background-color: white;
    right: 0;
    top: 0;
  }
  .line-4 {
    content: '';
    display: block;
    position: absolute;
    height: 1px;
    background-color: white;
    right: 0;
    bottom: 0;
  }
}

@keyframes move1 {
  0% {
    height: 100%;
    bottom: 0;
  }
  54% {
    height: 0;
    bottom: 100%;
  }
  55% {
    height: 0;
    bottom: 0;
  }
  100% {
    height: 100%;
    bottom: 0;
  }
}

@keyframes move2 {
  0% {
    width: 0;
    left: 0;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes move3 {
  0% {
    height: 100%;
    top: 0;
  }
  54% {
    height: 0;
    top: 100%;
  }
  55% {
    height: 0;
    top: 0;
  }
  100% {
    height: 100%;
    top: 0;
  }
}

@keyframes move4 {
  0% {
    width: 0;
    right: 0;
  }
  55% {
    width: 100%;
    right: 0;
  }
  100% {
    width: 0;
    right: 100%;
  }
}
</style>
