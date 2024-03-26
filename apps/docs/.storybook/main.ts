import { resolve } from 'path';

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: [
    '../../../node_modules/@refract-ui/stories/**/*.mdx'
    // '../../../node_modules/@refract-ui/hook-fields/**/*.stories.tsx',
    // '../../../packages/ui/**/*.stories.tsx',
    // '../../web/src/**/*.stories.tsx'
  ],
  addons: [
    // '@storybook/addon-actions',
    '@storybook/addon-essentials',
    // '@storybook/addon-interactions',
    '@storybook/addon-links',
    // '@storybook/addon-onboarding',
    // '@storybook/addon-themes',
    '@storybook/addon-a11y',
    '@refract-ui/stories'
  ],
  features: {
    // buildStoriesJson: true,
    // storyStoreV7: true
  },
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  core: {
    builder: '@storybook/builder-vite'
  },
  docs: {
    autodocs: true
  },
  staticDirs: [
    {
      from: '../../../packages/theme/fonts',
      to: resolve(__dirname, '../../../packages/theme/fonts')
    }
  ],
  webpackFinal: async (c) => {
    return {
      ...c,
      resolve: {
        ...c.resolve,
        alias: {
          ...c.resolve.alias,
          '@mono/web': resolve(__dirname, '../../web/src')
        }
      }
    };
  }
};
export default config;
