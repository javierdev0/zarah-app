import type { Config } from 'jest'

const config: Config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  preset: 'ts-jest',
  verbose: true,
  clearMocks: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jest-environment-jsdom',
  transform: {},
  transformIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  extensionsToTreatAsEsm: ['.ts', '.tsx']
}

export default config
