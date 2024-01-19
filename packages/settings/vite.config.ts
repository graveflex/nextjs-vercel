/* eslint-disable turbo/no-undeclared-env-vars */
import dotenv from 'dotenv';
import path from 'path';
import EnvironmentPlugin from 'vite-plugin-environment';
import tsConfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

import LogSettingsPlugin from './logSettingsPlugin';

export default defineConfig(async () => {
  const root = path.resolve(__dirname, '../..');
  dotenv.config({ path: `${__dirname}/../../.env` });

  const environmentPlugin = EnvironmentPlugin({
    PROJECT_NAME: null,
    NEXT_PORT: null,
    DOCS_PORT: null,
    LOCAL: 'false',
    POSTGRES_URL: null,
    PAYLOAD_SECRET: null,
    VERCEL_GIT_PULL_REQUEST_ID: null,
    VERCEL_GIT_COMMIT_REF: null,
    PORT: null,
    BLOB_READ_WRITE_TOKEN: null,
    BLOB_ENDPOINT_URL: null,
    BLOB_STORE_ID: null
  });

  const logSettingsPlugin = LogSettingsPlugin();
  // on build/test, this handles tsconfig paths
  const tsPaths = tsConfigPaths({
    root,
    projects: [
      path.resolve(__dirname, '../ui/tsconfig.json'),
      path.resolve(__dirname, '../../apps/web/tsconfig.json')
    ]
  });

  return {
    test: {
      globals: true,
      root,
      coverage: {
        provider: 'v8',
        clean: true,
        reporter: ['text', 'html', 'clover', 'json', 'cobertura']
      },
      environment: 'jsdom'
    },
    plugins: [
      !process.env.VITEST && environmentPlugin,
      logSettingsPlugin,
      tsPaths
    ],
    build: {
      outDir: path.join(__dirname, 'dist'),
      lib: {
        entry: path.resolve(__dirname, 'index.ts'),
        name: 'settings',
        fileName: (format, fname) => {
          const suffix = format === 'umd' ? 'cjs' : 'js';
          return `${fname}.${format}.${suffix}`;
        }
      }
    }
  };
});
