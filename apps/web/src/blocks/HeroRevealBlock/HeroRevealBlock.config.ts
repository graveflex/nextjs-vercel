import type { Block } from 'payload/types';

import BlockConfig from '@web/payload/fields/BlockConfig';

const HeroRevealBlock: Block = {
  slug: 'heroRevealBlock',
  interfaceName: 'HeroRevealBlockT',
  fields: [
    BlockConfig(),
    {
      type: 'text',
      name: 'title',
      label: 'Title',
      required: false
    }
  ]
};

export default HeroRevealBlock;
