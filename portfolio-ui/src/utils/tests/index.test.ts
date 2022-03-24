import { arrayFactorys } from '@/utils';

describe('Utils Test.', () => {
  test('arrayFactorys method test', () => {
    expect(arrayFactorys('s', 5).length).toBe(5);
  });

  // まだ途中
  // test('randomString method test', () => {
  //   expect(arrayFactorys('s', 5).length).toBe(5);
  // })
});
