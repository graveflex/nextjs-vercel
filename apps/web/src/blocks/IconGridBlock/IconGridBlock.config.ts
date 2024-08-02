import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import CTA from '@mono/web/payload/fields/CTA';
import type { Block } from 'payload';

const IconGridBlock: Block = {
  slug: 'iconGridBlock',
  interfaceName: 'IconGridBlockT',
  fields: [
    BlockConfig(),
    {
      type: 'select',
      name: 'layout',
      label: 'Image Position',
      defaultValue: 'horizontal',
      options: [
        {
          label: 'Above text',
          value: 'horizontal'
        },
        {
          label: 'Left of text',
          value: 'vertical'
        }
      ]
    },
    {
      type: 'array',
      name: 'items',
      label: 'Items',
      minRows: 1,
      maxRows: 8,
      localized: true,
      fields: [
        {
          type: 'upload',
          name: 'image',
          label: 'Image or Pictogram',
          relationTo: 'images',
          required: true
        },
        {
          type: 'richText',
          name: 'content',
          label: 'Content',
          required: true
        },
        CTA()
      ]
    }
  ]
};

export default IconGridBlock;
