import type { DefaultTheme } from 'styled-components';

type colorProps = keyof DefaultTheme['themeColors'];

export type PayloadIconProps = {
  name: string /* List all public icon names here */;
  size?: 'sm' | 'md' | 'lg';
  color?: colorProps;
};
