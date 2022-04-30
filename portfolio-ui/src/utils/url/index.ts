/**
 * @desc URLに関するUtils
 */
import { URLCharacterConfig } from '@/config';
import { URLAnimationReject } from '@/lib/error';

export class URLAnimation {
  // 路上
  private underScore = '_';
  // どのくらい歩くか
  private distanceToTheLoveHotel = this.underScore.repeat(5);
  // hotel 絵文字
  private hotel = '🏩';
  // man 絵文字
  private man = '👨';
  // woman 絵文字
  private woman = '👩';
  // 中止count
  private rejectCount = 0;

  private async sleep(msec: number) {
    if (this.rejectCount) {
      throw new URLAnimationReject();
    }
    return new Promise((r) => setTimeout(r, msec));
  }

  /** @desc hotel start */
  public async afterDinner(): Promise<void> {
    if (this.rejectCount) {
      throw new URLAnimationReject();
    }
    return new Promise<void>((resolve) => {
      location.hash = `${this.hotel}${this.distanceToTheLoveHotel}${this.man}${this.woman}`;
      resolve();
    });
  }

  /** @desc hotelへ行く */
  public async walkingToTheLoveHotel(): Promise<void> {
    if (this.rejectCount) {
      throw new URLAnimationReject();
    }
    return new Promise<void>((resolve) => {
      const walkingDistanceCount = this.distanceToTheLoveHotel.length - 2;
      let count = 1;
      const animation = setInterval(() => {
        this.distanceToTheLoveHotel = this.distanceToTheLoveHotel.slice(0, -1);
        location.hash = `${this.hotel}${this.distanceToTheLoveHotel}${this.man}${this.woman}`;
        count++;
        if (count > walkingDistanceCount) {
          clearInterval(animation);
          resolve();
        }
      }, 75);
    });
  }

  public async goInside() {
    if (this.rejectCount) {
      throw new URLAnimationReject();
    }
    return new Promise<void>((resolve) => {
      const animation = setInterval(() => {
        if (this.distanceToTheLoveHotel.length === 0) {
          location.hash = `${this.hotel}`;
          clearInterval(animation);
          resolve();
        } else {
          this.distanceToTheLoveHotel = this.distanceToTheLoveHotel.slice(
            0,
            -1
          );
          location.hash = `${this.hotel}${this.distanceToTheLoveHotel}${this.man}${this.woman}`;
        }
      }, 200);
    });
  }

  public async haveSex() {
    if (this.rejectCount) {
      throw new URLAnimationReject();
    }
    return new Promise<void>((resolve) => {
      const love = [
        `${this.man}💕____💕${this.woman}`,
        `${this.man}_💕__💕_${this.woman}`,
        `${this.man}___💕___${this.woman}`
      ];
      let count = love.length;
      const animation = setInterval(() => {
        location.hash = `${this.hotel}${love[count % love.length]}`;
        count++;
        if (count === love.length * 10) {
          location.hash = `${this.hotel}${this.man}_✨💖✨_${this.woman}`;
          clearInterval(animation);
          resolve();
        }
      }, 200);
    });
  }

  public async sleeping() {
    if (this.rejectCount) {
      throw new URLAnimationReject();
    }
    return new Promise<void>((resolve) => {
      const sleep = ['🌙🛏💑', '🌙🛏💑💤', '🌙🛏💑💤💤', '🌙🛏💑💤💤💤'];
      let count = sleep.length;
      const animation = setInterval(() => {
        location.hash = `${this.hotel}${sleep[count % sleep.length]}`;
        count++;
        if (count === sleep.length * 4) {
          location.hash = `${this.hotel}🌙🛏💑💤💤💤`;
          clearInterval(animation);
          resolve();
        }
      }, 500);
    });
  }

  public async goodMorning() {
    if (this.rejectCount) {
      throw new URLAnimationReject();
    }
    return new Promise<void>((resolve) => {
      const sun = ['☁', '🌥', '⛅', '🌤', '☀'];
      let count = 0;
      const animation = setInterval(() => {
        location.hash = `${this.hotel}${sun[count]}`;
        count++;
        if (count === sun.length) {
          clearInterval(animation);
          resolve();
        }
      }, 500);
    });
  }

  public goOutside() {
    if (this.rejectCount) {
      throw new URLAnimationReject();
    }
    return new Promise<void>((resolve) => {
      const couple = [
        `${this.woman}`,
        `💘${this.woman}`,
        `${this.man}💘${this.woman}`
      ];
      let count = 0;
      const animation = setInterval(() => {
        location.hash = `${this.hotel}${couple[count]}`;
        count++;
        if (count === couple.length) {
          clearInterval(animation);
          resolve();
        }
      }, 250);
    });
  }

  public seeYouOff() {
    if (this.rejectCount) {
      throw new URLAnimationReject();
    }
    return new Promise<void>((resolve) => {
      const walkingDistanceCount = 21;
      let count = 1;
      const animation = setInterval(() => {
        this.distanceToTheLoveHotel = this.underScore.repeat(count);
        location.hash = `${this.hotel}${this.distanceToTheLoveHotel}${this.man}💘${this.woman}`;
        count++;
        if (count > walkingDistanceCount) {
          clearInterval(animation);
          resolve();
        }
      }, 75);
    });
  }

  /** @desc  */
  public async goodbye() {
    if (this.rejectCount) {
      throw new URLAnimationReject();
    }
    return new Promise<void>((resolve) => {
      location.hash = `${this.hotel}${this.distanceToTheLoveHotel}${this.man}👋${this.woman}`;
      resolve();
    });
  }

  public async goHomeOnATrain() {
    if (this.rejectCount) {
      throw new URLAnimationReject();
    }
    return new Promise<void>((resolve) => {
      const tracks = '__~';
      let _count = 1;
      const animation = setInterval(() => {
        location.hash = `${this.hotel}${this.distanceToTheLoveHotel}${
          this.man
        }${tracks.repeat(_count)}${this.woman}🚃`;
        _count++;
        if (_count > 10) {
          /** interval解除 */
          clearInterval(animation);
          resolve();
        }
      }, 200);
    });
  }

  public async clearHash() {
    this.rejectCount++;
    history.replaceState(null, ' ', null);
  }

  public async animation() {
    await this.afterDinner();
    await this.sleep(400);
    await this.walkingToTheLoveHotel();
    await this.sleep(300);
    await this.goInside();
    await this.sleep(700);
    await this.haveSex();
    await this.sleep(1000);
    await this.sleeping();
    await this.sleep(1000);
    await this.goodMorning();
    await this.sleep(700);
    await this.goOutside();
    await this.sleep(400);
    await this.seeYouOff();
    await this.sleep(600);
    await this.goodbye();
    await this.sleep(600);
    await this.goHomeOnATrain();
    await this.sleep(1500);
  }

  /** @desc 一文字用のURL animation */
  public static SingleURLAnimation = (select: string, time = 200): void => {
    const urlCharacterConfig = new URLCharacterConfig(select);
    const characters = urlCharacterConfig.getCharcters;
    let count = 0;
    setInterval(() => {
      console.log(`よくわからnn${count % characters.length}`);
      location.hash = characters[count % characters.length];
      count++;
    }, time);
  };
}
