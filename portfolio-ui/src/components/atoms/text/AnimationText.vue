<!--
  @desc アニメーションでtextが出現する
  意味 破ることのできない
  @see https://codepen.io/groovc/pen/EjaMYZ
-->
<template>
  <AtomsButtonLink :link="'/'">
    <div class="texts">
      <div class="texts-unbreakable">
        <span class="un span">UN</span><span class="break span">BREAK</span
        ><span class="able span">ABLE</span>
      </div>
      <div class="texts-name">HELLO NAOHITO-T</div>
    </div>
  </AtomsButtonLink>
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  onUnmounted
} from '@nuxtjs/composition-api';
import { domSelect, addClassName, removeClassName } from '@/utils';
import { commonErrorHandler } from '@/lib/error';

export default defineComponent({
  setup() {
    const instance = getCurrentInstance();
    try {
      onMounted(() => {
        const dom = domSelect('body');
        addClassName(dom, 'animate');
      });
      onUnmounted(() => {
        const dom = domSelect('body');
        removeClassName(dom, 'animate');
      });
    } catch (e: unknown) {
      commonErrorHandler(e, instance);
    }
  }
});
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Anton);

.texts {
  position: fixed;
  bottom: 10px;
  left: 20px;
  z-index: 10;

  &-unbreakable {
    font-family: 'Anton', sans-serif;
    line-height: 1;
    letter-spacing: -0.07em;
    color: #fff;

    // 各spanに対して
    .span {
      font-family: 'Anton', Helvetica, sans-serif;
      font-size: 40px;
      text-transform: uppercase;
      opacity: 0;
      color: #fff;
      filter: alpha(opacity=0);
    }
  }

  &-name {
    font-family: 'Anton', sans-serif;
    font-size: 45px;
    line-height: 1;
    margin-top: -11px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1) 3s;
    -webkit-transform: translateX(-1000%);
    -ms-transform: translateX(-1000%);
    transform: translateX(-1000%);
    letter-spacing: -1px;
    text-transform: uppercase;
    color: #fc0;
  }
}
.un {
  -webkit-transition: all 0.3s ease-in-out 1.7s;
  transition: all 0.3s ease-in-out 1.7s;
  letter-spacing: -0.07em;
}
.break {
  -webkit-transition: all 0.3s ease-in-out 2s;
  transition: all 0.3s ease-in-out 2s;
  letter-spacing: -0.07em;
}

.able {
  -webkit-transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1) 2.3s;
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1) 2.3s;
  letter-spacing: -0.07em;
}

// animate付与後
.animate {
  .texts-name {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
  .un {
    font-size: 40px;
    -webkit-transform: scale(1.5, 1.5);
    -ms-transform: scale(1.5, 1.5);
    transform: scale(1.5, 1.5);
    opacity: 1;
    filter: alpha(opacity=100);
  }
  .break {
    font-size: 60px;
    -webkit-transform: scale(1.5, 1.5);
    -ms-transform: scale(1.5, 1.5);
    transform: scale(1.5, 1.5);
    opacity: 1;
    filter: alpha(opacity=100);
  }
  .able {
    font-size: 80px;
    -webkit-transform: scale(1.5, 1.5);
    -ms-transform: scale(1.5, 1.5);
    transform: scale(1.5, 1.5);
    opacity: 1;
    filter: alpha(opacity=100);
  }
}
</style>
