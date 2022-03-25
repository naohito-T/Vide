import { arrayFactorys, strToCharacters } from '@/utils';

describe('Utils Test.', () => {
  test('arrayFactorys method test', () => {
    expect(arrayFactorys('s', 5).length).toBe(5);
  });

  // まだ途中
  // test('randomString method test', () => {
  //   expect(arrayFactorys('s', 5).length).toBe(5);
  // })

  test('char method test', () => {
    const mockChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    expect(strToCharacters('abcdefg')).toStrictEqual(mockChar);
  });
});
