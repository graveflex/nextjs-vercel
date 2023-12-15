/** @type { import('@storybook/react').Preview } */

import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider } from 'styled-components';

import defaultTheme from 'theme/src/theme';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: defaultTheme
      },
      defaultTheme,
      Provider: ThemeProvider
    })
  ]
};

export default preview;
