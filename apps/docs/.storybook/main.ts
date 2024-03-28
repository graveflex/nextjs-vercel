import { type StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../../../node_modules/@refract-ui/stories/**/*.mdx',
    '../../../node_modules/@refract-ui/hook-fields/**/*.stories.tsx',
    '../../../packages/ui/**/*.stories.tsx',
  ],
  addons: [
    // '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@refract-ui/stories'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: true
  },
  staticDirs: [
    {
      from: '../../../packages/theme/fonts',
      to: path.resolve(__dirname, '../../../packages/theme/fonts')
    }
  ],
  webpackFinal: async (c) => {
    // ensure storybook entries in the @refract-ui package are transpiled
    (c.module?.rules ?? []).push({
      test: /\.tsx?$/,
      use: [
        {
          loader: require.resolve('swc-loader'),
          options: {
            sourceMap: true,
            jsc: {
              parser: {
                syntax: 'typescript',
                tsx: true
              },
              transform: {
                react: {
                  pragma: 'React.createElement',
                  pragmaFrag: 'React.Fragment',
                  throwIfNamespace: true,
                  development: false,
                  useBuiltins: false
                }
              }
            }
          }
        }
      ],
      include: [
        path.resolve(__dirname, '../../../node_modules/@refract-ui/stories'),
        path.resolve(__dirname, '../../../node_modules/@refract-ui/hook-fields')
      ]
    });

    return c;
  }
};
export default config;
