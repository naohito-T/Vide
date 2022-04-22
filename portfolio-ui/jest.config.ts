import type { Config } from '@jest/types';

// 標準では.test.が対象(specはplaywrightに使う)
// Jestはnode環境で実行されるため、ESMで書かれたimport/exportを使った構文は、CommonJSのようにmodule.export/require(“)の形式に変換されている必要がある
const config: Config.InitialOptions = {
  preset: 'ts-jest', // transformもしくはpresetにts-jestをセットすればTSをtestできる
  // aliasを使ったモジュール参照をしてくれる
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testEnvironment: 'node',
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '~/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  // 指定されたファイルパターンのファイルに変換をかけてくれる機能、,transformがTSをテストできる立役者
  // preset がこの transform を実行してファイルを変換しているので、ts-jest を指定すると TypeScript 対応ができる
  transform: {
    '^.+\\.ts$': 'ts-jest', // tsconfig.jsonを参照しトランスパイルを行う
    '^.+\\.js$': 'babel-jest', // .babelrcを参照しトランスパイルを行う
    '^.*\\.(vue)$': 'vue-jest'
  },
  // テスト対象の拡張子を列挙する
  moduleFileExtensions: ['js', 'ts', 'vue', 'node'],
  // 個々のテストを実行中に報告するかどうかを指定します。すべてのエラーは、実行後にも下部に表示されます。実行中のテストファイルが1つだけの場合、デフォルトはtrueになることに注意してください。
  verbose: true,
  // カバレッジを取得する設定
  collectCoverage: true,
  // カバレッジを収集する対象のファイル
  collectCoverageFrom: ['<rootDir>/src/**/*.test.ts'],
  coverageDirectory: 'coverage'
};

export default config;
