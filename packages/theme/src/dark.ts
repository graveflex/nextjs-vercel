import { theme } from '@refract-ui/sc';

import satoshi from '../fonts';

import textVariants from './typography';

export default theme({
  fontStacks: {
    sans: [satoshi.style.fontFamily]
  },
  textVariants,
  luminance: {
    range: [1.0, 0.9, 0.8, 0.1]
  }
});
