import { type RefractTheme } from '@mono/theme/src/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends RefractTheme {
    name?: string;
  }
}
