import type { Block } from 'payload/types';

const Schema: Block = {
  slug: 'HeroBlock',
  interfaceName: 'HeroBlock',
  labels: {
    singular: 'HeroBlock',
    plural: 'HeroBlocks'
  },
  fields: [
    {
      name: 'header',
      type: 'text'
    },
    {
      name: 'subHeader',
      type: 'text'
    },
    {
      name: 'cta',
      type: 'text'
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false
    }
  ]
};

export default Schema;
