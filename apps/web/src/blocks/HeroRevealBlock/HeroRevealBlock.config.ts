import type { Block } from 'payload/types';

import BlockConfig from '@web/payload/fields/BlockConfig';

const HeroRevealBlock: Block = {
  slug: 'heroRevealBlock',
  interfaceName: 'HeroRevealBlockT',
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
      type: 'upload',
      relationTo: 'images',
      name: 'productDetail',
      label: 'Product Detail Image',
      required: true
    },
    {
      type: 'text',
      name: 'title',
      label: 'Title',
      required: true
    },
    {
      type: 'richText',
      name: 'body',
      label: 'Content',
      required: true
    }
  ]
};

export default HeroRevealBlock;
