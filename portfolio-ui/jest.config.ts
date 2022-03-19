import type { Config } from '@jest/types';

// 標準では.test.が対象(specはplaywrightに使う)

const config: Config.InitialOptions = {
  preset: 'ts-jest', // transformもしくはpresetにts-jestをセットすればTSをtestできる
  // aliasを使ったモジュール参照をしてくれる
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/src/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  // testPathIgnorePatterns: ['<rootDir>/cypress'],
  // 指定されたファイルパターンのファイルに変換をかけてくれる機能、,transformがTSをテストできる立役者
  // preset がこの transform を実行してファイルを変換しているので、ts-jest を指定すると TypeScript 対応ができる
  transform: {
    '^.+\\.ts$': 'ts-jest', // tsconfig.jsonを参照しトランスパイルを行う
    '^.+\\.js$': 'babel-jest', // .babelrcを参照しトランスパイルを行う
    '.*\\.(vue)$': 'vue-jest'
  },
  // テスト対象の拡張子を列挙する
  moduleFileExtensions: ['js', 'ts', 'vue', 'node'],
  // 個々のテストを実行中に報告するかどうかを指定します。すべてのエラーは、実行後にも下部に表示されます。実行中のテストファイルが1つだけの場合、デフォルトはtrueになることに注意してください。
  verbose: true,
  // カバレッジを取得する設定
  collectCoverage: true,
  // collectCoverageFrom: [
  //   '<rootDir>/src/components/**/*.vue',
  //   '<rootDir>/src/pages/**/*.vue'
  // ],
  collectCoverageFrom: ['src/**/*.{js,ts}'],
  coverageDirectory: 'coverage',
  // テスト環境設定
  testEnvironment: 'jsdom'
};

export default config;
