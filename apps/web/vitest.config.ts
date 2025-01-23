import path from 'node:path';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { stubTransform } from 'vite-transform-stub';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

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
    tsconfigPaths(),
    react(),
    svgr(),
    stubTransform(/^.+\.(gif|jpe?g|tiff?|png|webp|bmp)(\?\w+)?$/)
  ],
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'cobertura'],
      include: ['./src/**/*']
    },
    globals: true,
    setupFiles: ['./setup.ts'],
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
