import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';

const monoDir = path.resolve(__dirname, '../../web/src');

// TODO: Probably can get rid of this alias soon.
// Just added to test migrating to Vite for test integration:
const monoUiDir = path.resolve(__dirname, '../../../packages/ui/');

export default defineConfig({
  resolve: {
    alias: {
      '@mono/web': monoDir,
      '@mono/ui': monoUiDir
    }
  },
  plugins: [
    react(),
    storybookTest({
      configDir: path.join(__dirname, '.storybook'),
      storybookUrl: `http://127.0.0.1:${process.env.DOCS_PORT}`,
      storybookScript: 'pnpm dev:stories --ci'
    })
  ],
  test: {
    browser: {
      enabled: true,
      provider: 'playwright',
      name: 'chromium'
    },
    setupFiles: './.storybook/vitest.setup.ts'
  }
});
