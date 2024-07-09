import { defaultExtensions } from '@refract-ui/core';
import { defaultsDeep } from 'lodash';

const defaultTextVariants = defaultExtensions.find(
  (ext) => ext.name === 'textVariants'
)?.defaults;

export default defaultsDeep(
  {
    h1: {
      stack: 'serif',
      size: '8',
      weight: '300',
      height: '1',
      letterSpacing: '-4'
    },
    h2: {
      stack: 'serif',
      size: '6',
      weight: '300',
      height: '1',
      letterSpacing: '-2'
    },
    h3: {
      stack: 'serif',
      size: '4',
      weight: '400',
      height: '1',
      letterSpacing: '-1'
    },
    h4: {
      stack: 'serif',
      size: '3',
      weight: '400',
      height: '1',
      letterSpacing: '-1'
    },
    h5: {
      stack: 'serif',
      size: '2',
      weight: '400',
      height: '1',
      letterSpacing: '-1',
      transform: 'none'
    },
    h6: {
      stack: 'sans',
      size: '2',
      weight: '400',
      height: '1',
      letterSpacing: '-1'
    }
  },
  defaultTextVariants
);
