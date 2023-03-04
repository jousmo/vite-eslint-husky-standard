import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    resolveSnapshotPath: (testPath, snapExtension) => testPath + snapExtension,
    reporters: ['verbose'],
    coverage: {
      all: true,
      reporter: ['text', 'html', 'lcov'],
      include: ['**/src/**/*.{js,ts}'],
      exclude: [
        '**/src/main.{js,ts}',
        '**/*.types.{ts}',
        '**/*.test.{js,ts}',
        '**/src/vite-env*'
      ],
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0
    }
  }
})
