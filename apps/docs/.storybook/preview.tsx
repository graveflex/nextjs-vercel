import React from 'react';
import GlobalStyles from '@refract-ui/sc/components/GlobalStyles';
import { configureGlobalTypes } from '@refract-ui/stories';
import type { Args, Decorator } from '@storybook/react';

import { themeList } from '@mono/theme/src/theme';

const { light, dark } = themeList;

const withRefract: Decorator<Args> = (Story, c) => {
  const theme =
    c.globals.allRefractThemes[c.globals.currentRefractTheme] ||
    c.globals.allRefractThemes.light;

  return (
    <GlobalStyles
      theme={theme}
      style={{ display: 'grid', gridTemplateRows: '1fr', alignItems: 'start' }}
    >
      <Story {...c} />
    </GlobalStyles>
  );
};

const themes = [
  { title: 'light', value: light },
  { title: 'dark', value: dark }
];

export const globalTypes = {
  ...configureGlobalTypes(themes)
};

export const parameters = {
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

export const decorators = [withRefract];
