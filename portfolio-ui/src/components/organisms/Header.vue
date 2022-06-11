<template>
  <div ref="header">
    <header class="header">
      <div class="nav" @click="onClick">
        <span class="nav__line nav__line--top" ref="menuLineTop"></span>
        <span class="nav__line nav__line--bottom" ref="menuLineButtom"></span>
      </div>
      <div class="menu">
        <div class="menu-inner">
          <nav>
            <a href="/">Top</a>
            <nuxt-link to="/skills">Skills</nuxt-link>
            <nuxt-link to="/works">Works</nuxt-link>
            <nuxt-link to="/about">About</nuxt-link>
          </nav>
          <span class="time">{{ currentTime }}</span>
          <span class="madeIn">Naohito-T</span>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@nuxtjs/composition-api';
import { formatDate } from '@/utils';

export default defineComponent({
  setup() {
    const menuLineTop = ref<HTMLElement | null>(null);
    const menuLineButtom = ref<HTMLElement | null>(null);
    const header = ref<HTMLElement | null>(null);
    const currentTime = computed(() => formatDate(new Date()));

    const onClick = () => {
      header.value?.classList.toggle('menu--active');
      menuLineTop.value?.classList.toggle('active');
      menuLineButtom.value?.classList.toggle('active');
    };

    return {
      menuLineTop,
      menuLineButtom,
      header,
      currentTime,
      onClick
    };
  }
});
</script>


<style lang="scss" scoped>
.nav {
  cursor: pointer;
  height: 12px;
  position: absolute;
  right: 20px;
  top: 20px;
  width: 30px;
  z-index: 99;

  &__line {
    background: #fff;
    display: block;
    height: 2px;
    position: absolute;
    transition: transform 0.3s;
    width: 100%;

    &--bottom {
      bottom: 0;
    }

    &--bottom.active {
      bottom: 6px;
      transform: rotate(135deg);
      background: #f4f6f7;
    }

    &--top.active {
      top: 4px;
      transform: rotate(45deg);
      background: #f4f7f5;
    }
  }
}

.header {
  position: fixed;
  overflow: visible;
  z-index: 100;
  background-color: transparent;
  width: 100%;
  height: 5rem;
  padding: 1.5rem;

  nav a {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #f0f0f0;
  }

  nav {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
}

.menu {
  position: absolute;
  right: 0;
  top: 0;
  background-color: rgb(0 0 0 / 60%);
  color: #f0f0f0;
  height: 100vh;
  width: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  a {
    transform: translate3d(-150px, 0, 0);
    transition: transform 0.15s ease-in;
  }

  .menu-inner {
    position: relative;
    height: 100%;
    width: 80vw;
    padding: 1.5rem;
  }

  /* Unnecessary styles for the menu footer */
  .time,
  .madeIn {
    position: absolute;
    bottom: 1.5rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: bold;
  }
  .time {
    right: 1.5rem;
  }
}

.menu--active {
  nav a {
    transform: translate3d(0, 0, 0);
    transition: transform 500ms ease-out;

    /* Handles items within the slide-out to give them the delayed slide-in */
    &:first-child {
      transition-delay: 0.2s;
    }
    &:nth-child(2) {
      transition-delay: 0.3s;
    }
    &:nth-child(3) {
      transition-delay: 0.3s;
    }
    &:last-child {
      transition-delay: 0.4s;
    }
  }
}

// This media query sets the width of the menu to be larger on a smaller screen
@media screen and (max-width: 767px) {
  .menu--active .menu {
    width: 80%;
  }
}

// This media query sets the menu width to be slightly smaller on a larger screen (think an iPad)
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .menu--active .menu {
    width: 40%;
    .menu-inner {
      width: 40vw;
    }
  }
}

// This media query styles the menu for a large environment (think a desktop)
@media screen and (min-width: 1024px) {
  .menu--active .menu {
    width: 30%;
    .menu-inner {
      width: 40vw;
    }
  }
}
</style>
