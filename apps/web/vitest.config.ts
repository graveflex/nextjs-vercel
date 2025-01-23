import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { stubTransform } from 'vite-transform-stub';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    svgr(),
    stubTransform(/^.+\.(gif|jpe?g|tiff?|png|webp|bmp)(\?\w+)?$/),
    storybookTest({
      // The location of your Storybook config, main.js|ts
      configDir: path.join(dirname, '.storybook'),
      // This should match your package.json script to run Storybook
      // The --ci flag will skip prompts and not open a browser
      storybookScript: 'pnpm storybook --ci'
    })
  ],
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'cobertura'],
      include: ['./src/**/*']
    },
    browser: {
      enabled: true,
      name: 'chromium',
      // Make sure to install Playwright
      provider: 'playwright',
      headless: true
    },
    globals: true,
    setupFiles: ['./setup.ts', './.storybook/vitest.setup.ts'],
    environment: 'jsdom',
    deps: {
      inline: ['vitest-canvas-mock']
    },
    // For this config, check https://github.com/vitest-dev/vitest/issues/740
    // threads: false,
    environmentOptions: {
      jsdom: {
        resources: 'usable'
      }
    }
  }
});
