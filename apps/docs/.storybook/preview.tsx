import { storybookThemes } from '@mono/theme/src/storybook';
import { configureGlobalTypes, withRefract } from '@refract-ui/stories';
import type { Decorator, Preview } from '@storybook/react';

const globalTypes = {
  ...configureGlobalTypes(storybookThemes)
};

const parameters = {
  backgrounds: {
    default: 'light'
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

const decorators = [withRefract] as Decorator[];

const preview: Preview = {
  decorators,
  parameters,
  globalTypes
};

export default preview;
