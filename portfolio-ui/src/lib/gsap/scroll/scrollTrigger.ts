/**
 * @desc ScrollTrigger専用 モジュールファイル
 * @see https://yumegori.com/gsap-scrolltrigger
 */

ScrollTrigger.matchMedia({
  // 960px以上
  '(min-width: 960px)': function () {
    gsap.to('.js-demo-section', {
      autoAlpha: 1,
      x: 1000,
      scrollTrigger: {
        trigger: '.js-trigger',
        start: 'top center'
      }
    });
  },
  // 600px以上959px以下
  '(min-width: 600px) and (max-width: 959px)': function () {
    gsap.to('.js-demo-section', {
      autoAlpha: 1,
      x: 800,
      scrollTrigger: {
        trigger: '.js-trigger',
        start: 'top center'
      }
    });
  },

  // 599px以下
  '(max-width: 599px)': function () {
    gsap.to('.js-demo-section', {
      autoAlpha: 1,
      x: 300,
      scrollTrigger: {
        trigger: '.js-trigger',
        start: 'top center'
      }
    });
  },
  // メディアのサイズに関係なく、すべてに適用する
  all: function () {
    gsap.set('.js-demo-section', { autoAlpha: 0 });
  }
});
