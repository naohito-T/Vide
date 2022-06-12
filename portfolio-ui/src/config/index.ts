import { BaseConfig } from './_baseConfig';
import { IfirebaseParam } from '@/lib/types';
import { mockAboutDesc } from '@/__mocks__';
import { arrayFactorys } from '@/utils';

/** @desc App config */
class AppConfig extends BaseConfig {
  private TOP_PAGE_IMAGES = AppConfig.generateRunImage(this.runEnv);

  public get topPageImages(): string[] {
    return this.TOP_PAGE_IMAGES;
  }

  private static generateRunImage(env: string): string[] {
    switch (env) {
      case 'local':
        return [
          '~/assets/image/png/top_image.jpg',
          '~/assets/image/png/top_image1.png',
          '~/assets/image/png/top_image1.png',
          '~/assets/image/png/top_image1.png',
          '~/assets/image/png/top_image1.png'
        ];
      case 'pro':
      default:
        return arrayFactorys(
          'https://source.unsplash.com/VkwRmha1_tI/800x533',
          5
        );
    }
  }
}

/** @desc Firebase のconfig */
class FirebaseConfig extends BaseConfig {
  /**
   * @return {FirebaseApp} FirebaseAppの初期化パラメータを返す
   */
  get initializeConfigParam(): IfirebaseParam {
    return {
      apiKey: process.env.API_KEY ?? '',
      authDomain: process.env.AUTH_DOMAIN ?? '',
      projectId: process.env.PROJECT_ID ?? '',
      storageBucket: process.env.STORAGE_BUCKET ?? '',
      messagingSenderId: process.env.MESSAGING_SENDER_ID ?? '',
      appId: process.env.APP_ID ?? '',
      measurementId: process.env.MEASUREMENT_ID ?? ''
    };
  }
}

/**
 * @desc Hooper config
 * ↓ api refarence
 * @see https://baianat.github.io/hooper/api.html#props
 * ↓ hooper refarence
 * @see https://baianat.github.io/hooper/examples.html
 */

/** @desc HooperConfig */
class HooperConfig extends BaseConfig {
  // default 1 ビューごとに表示するアイテムの数(端数も可)
  private itemsToShow: number = 1;
  // default 1 ナビゲーションボタン使用時にスライドさせる項目数1。
  private itemsToSlide: number = 1;
  // default 0 初期スライドのindex番号
  private initialSlide: number = 0;
  // default false 無限スクロールモードを有効にする
  private infiniteScroll: boolean = false;
  // default false センターモードを有効にします。
  private centerMode: boolean = false;
  // default false 垂直方向のスライディングモードを有効にする。
  private vertical: boolean = false;
  // default null rtl modeの可否
  private rtl: null = null;
  // default true マウスドラッグを有効にする(マウスで右左にずらす)
  private mouseDrag: boolean = true;
  // default true スマホスワイプを有効
  private touchDrag: boolean = true;
  // default true マウスのホイールで制御できる
  private wheelControl: boolean = true;
  // default true キーボードで制御できる
  private keysControl: boolean = true;
  // default true どんな手でもスライドができるように
  private shortDrag: boolean = true;
  // default false 自動スライダーon
  private autoPlay: boolean = false;
  // default 2000 自動スライダーのスピード
  private playSpeed: number = 2000;
  // default 300 スライド遷移時間
  private transition: number = 300;
  // default null groupを作成する
  private group: null = null;
  // default true マウスがスライドに入った場合にpauseする
  private hoverPause: boolean = true;
  // default false 完全に空のスライドスペースがない場合にのみカルーセルをスライドさせるように制限する
  private trimWhiteSpace: boolean = false;
}

class AboutDescriptionsConfig extends BaseConfig {
  // 自分を構成する要素のdesc
  private constitutesDesc: string =
    '元美容師ソフトウェアエンジニア。本人は業務も楽しくすごす性質があるので、勤労している意識は皆無ということが最近わかりました。ソフトウェアを使った社会貢献に興味があります。';

  // program desc
  private programDesc: string =
    this.runEnv === 'local' ? mockAboutDesc : 'Program';

  // Accessorry desc
  private accessoryDesc: string =
    this.runEnv === 'local' ? mockAboutDesc : 'Accessorry';

  // Beautify desc
  private beautifyDesc: string =
    this.runEnv === 'local' ? mockAboutDesc : 'Beautify';

  // Tech desc
  private techDesc: string =
    this.runEnv === 'local' ? mockAboutDesc : 'tech blogについて';

  public get getConstitutesDesc(): string {
    return this.constitutesDesc;
  }

  public get getProgramDesc(): string {
    return this.programDesc;
  }

  public get getAccessoryDesc(): string {
    return this.accessoryDesc;
  }

  public get getBeautifyDesc(): string {
    return this.beautifyDesc;
  }

  public get getTechDesc(): string {
    return this.techDesc;
  }
}

/**
 * @desc URL文字のconfig
 */
class URLCharacterConfig extends BaseConfig {
  private moons = ['🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘'];

  private hotels = ['🏩'];

  private charcters: string[];

  constructor(select: string) {
    super();
    this.charcters = this.selectSingleCharacter(select);
  }

  private selectSingleCharacter(select: string): string[] {
    switch (select) {
      case 'moon':
        return this.moons;
      case 'hotel':
        return this.hotels;
      default:
        return this.moons;
    }
  }

  get getCharcters(): string[] {
    return this.charcters;
  }
}

export {
  AppConfig,
  FirebaseConfig,
  AboutDescriptionsConfig,
  URLCharacterConfig
};
