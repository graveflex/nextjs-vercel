import path from 'path';
import type { StorybookConfig } from '@storybook/nextjs';

const nextConfigPath = path.resolve(__dirname, '../../web/next.config.js');

const config: StorybookConfig = {
  stories: [
    '../../../packages/ui/**/*.stories.tsx',
    '../../../apps/web/**/*.stories.tsx',
    '../../../apps/web/**/**/*.stories.tsx'
  ],
  addons: [
    // '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-a11y'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      image: {
        loading: 'eager'
      },
      nextConfigPath
    }
  },
  docs: {
    autodocs: true
  },
  staticDirs: [],
  webpackFinal: async (c) => {
    const monoDir = path.resolve(__dirname, '../../web/src');
    if (c?.resolve?.alias) {
      // eslint-disable-next-line
      c.resolve.alias = {
        ...(c.resolve.alias ?? {}),
        '@mono/web': monoDir
      };
    }

    return c;
  }
};
export default config;
