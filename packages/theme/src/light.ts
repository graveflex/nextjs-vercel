import { theme } from '@refract-ui/sc';

import satoshi from '../fonts';

import textVariants from './typography';

export default theme({
  fontStacks: {
    sans: [satoshi.style.fontFamily]
  },
  textVariants
});
