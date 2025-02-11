import type { Preview } from '@storybook/react';
import '../../web/src/app/global.css';

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
  },

  // necessary for react 19
  reactOptions: {
    legacyRootApi: false,
    strictMode: false
  }
};

const isColorLight = (hex: string) => {
  const hexColor = hex.replace(/^#/, '');
  // Parse r, g, b values
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  // Calculate luminance
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  // Return true if color is light, false if dark
  return luminance > 128;
};

const preview: Preview = {
  parameters,
  decorators: [
    (Story, ctx) => {
      const bgColor = ctx?.globals?.backgrounds?.value ?? '#fff';
      const containerClass = isColorLight(bgColor) ? 'light' : 'dark';
      return <div className={containerClass}><Story /></div>;
    }
  ]
};

export default preview;
