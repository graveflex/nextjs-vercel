import type { RefractTheme } from '@petplate/ui/theme';

declare module 'styled-components' {
  export type DefaultTheme = RefractTheme;
}
