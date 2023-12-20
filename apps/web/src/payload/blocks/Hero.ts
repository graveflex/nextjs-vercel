import type { Block } from 'payload/types';

const Schema: Block = {
  slug: 'Hero',
  labels: {
    singular: 'Hero',
    plural: 'Heros'
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
