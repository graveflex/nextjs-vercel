import type { Block } from 'payload/types';

import BlockConfig from '@web/payload/fields/BlockConfig';

const ParallaxBackground: Block = {
  slug: 'parallaxBackground',
  interfaceName: 'ParallaxBackgroundT',
  fields: [
    BlockConfig(),
    {
      type: 'upload',
      relationTo: 'images',
      name: 'background',
      label: 'Background',
      required: true
    },
    {
      type: 'text',
      name: 'content',
      label: 'Content',
      required: true
    }
  ]
};

export default ParallaxBackground;
