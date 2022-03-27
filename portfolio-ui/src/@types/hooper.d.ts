// @see https://developer.hatenastaff.com/entry/2016/06/27/140931
// declare キーワードを使うと既存の JavaScript の型情報が表現できます
// .d.ts ファイルはコンパイルした結果、JS のコードは生成されません。
// というよりは、生成しない宣言しかしてはいけません。
// .d.ts という拡張子は、オブジェクトの実体ではなく、
// 型情報のみが含まれていることを示しています。 このファイルは TypeScript ビルド時のみに参照されるものであり、.js ファイルの生成は行われません。
// declare キーワードは、単一の変数や関数、クラスに型情報を与えるものですが、
// declare module 'モジュール名' のように使用すると、
// モジュール単位で型情報を付加することができます。 この仕組みを アンビエントモジュール (Ambient Modules) と呼びます。 これで型情報を定義しておくと、指定したモジュールをインポートしたときに、自動的に型情報が付加されるようになります。
declare module 'hooper' {
  import {
    Hooper,
    Slide,
    Progress,
    Pagination, // ページネーションが必要なときにimport
    Navigation // 左右のナビゲーションが必要なときにimport
  } from 'hooper';
  export { Hooper, Slide, Progress, Pagination, Navigation };
}

declare module 'hooper';
