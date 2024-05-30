/// <reference types="csstype" />

import { theme } from '@refract-ui/sc';
import fontStacks from './fontStacks';
import textVariants from './typography';

export default theme({
  fontStacks,
  textVariants,
  luminance: {
    range: [1.0, 0.9, 0.8, 0.1]
  }
});
