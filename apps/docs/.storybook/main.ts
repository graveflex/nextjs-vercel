import { dirname, join, resolve } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: [
    '../../../node_modules/@refract-ui/stories/**/*.stories.mdx',
    '../../../packages/ui/**/*.stories.tsx',
    '../../web/src/**/*.stories.tsx'
  ],
  addons: [
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-themes'),
    getAbsolutePath('@storybook/addon-actions'),
    '@refract-ui/stories'
  ],
  features: {
    buildStoriesJson: true,
    storyStoreV7: true
  },
  framework: {
    name: getAbsolutePath('@storybook/nextjs'),
    options: {}
  },
  docs: {
    autodocs: 'tag'
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
          '@web': resolve(__dirname, '../../web/src')
        }
      }
    };
  }
};
export default config;
