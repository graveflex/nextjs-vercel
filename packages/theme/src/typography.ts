import { defaultExtensions } from '@refract-ui/core';
import { defaultsDeep } from 'lodash';

const defaultTextVariants = defaultExtensions.find(
  (ext) => ext.name === 'textVariants'
)?.defaults;

export default defaultsDeep(
  {
    menuLink: {
      stack: 'sans',
      size: '1',
      color: 'fg',
      weight: 'bold',
      height: 1
    },
    pSmall: {
      stack: 'sans',
      size: '0',
      color: 'fg',
      weight: 'regular',
      height: 1
    },
    pLarge: {
      stack: 'sans',
      size: '2',
      color: 'fg',
      weight: 'regular',
      height: 1
    }
  },
  defaultTextVariants
);
