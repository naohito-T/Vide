import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest', // transformもしくはpresetにts-jestをセットすればTSをtestできる
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/src/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'node'],
  testPathIgnorePatterns: ['<rootDir>/cypress'],
  // 指定されたファイルパターンのファイルに変換をかけてくれる機能、,transformがTSをテストできる立役者
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue'
  ],
  testEnvironment: 'jsdom'
};

export default config;
