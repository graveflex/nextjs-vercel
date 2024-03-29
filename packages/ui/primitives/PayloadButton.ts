import type { DefaultTheme } from 'styled-components';

import type { PayloadIconProps } from './PayloadIcon';

type colorProps = keyof DefaultTheme['themeColors'];

export type PayloadButtonProps = {
  color: colorProps;
  icon?: Partial<PayloadIconProps>;
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'reset' | 'submit';
  variant?: 'solid' | 'outlined' | 'link';
  onClick?: () => void;
};
