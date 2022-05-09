# システム アーキテクチャ

---

## UI

デスクトップファーストで作成している

## font

fontのレスポンシブ対応はvwで対応している
[この記事が妥当](https://jajaaan.co.jp/css/responsive-font-size/)


---

## Nuxt

[参考URL](https://blog.35d.jp/2021-10-28-nuxt-composition-api-vuex-test)

![composition](images/composition.png)

- データ渡し

基本この構図でいく

pages: useAsyncでデータをとる
template: computed でstoreからとる
