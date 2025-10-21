import type { Config } from 'jest'

const config: Config = {
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.{spec,test}.{ts,tsx}'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx|mjs|cjs)$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: { runtime: 'automatic' },
          },
        },
      },
    ],
    '\\.(css)$': '<rootDir>/src/styleMock.ts',
  },
  modulePaths: ['<rootDir>/src'],
  resetMocks: true,
}

export default config
