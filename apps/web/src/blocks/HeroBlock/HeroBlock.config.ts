import type { Block } from 'payload/types';

const HeroBlock: Block = {
  slug: 'heroBlock',
  interfaceName: 'HeroBlockT',
  fields: [
    {
      type: 'text',
      name: 'title',
      label: 'Title',
      required: false
    }
  ]
};

export default HeroBlock;
