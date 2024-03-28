import { type RefractTheme } from './src/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends RefractTheme {
    name?: string;
  }
}
