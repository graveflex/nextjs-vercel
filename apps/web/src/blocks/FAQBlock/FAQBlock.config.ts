import type { Block } from 'payload/types';

import BlockConfig from '@web/payload/fields/BlockConfig';

const FAQBlock: Block = {
  slug: 'faqBlock',
  interfaceName: 'FAQBlockT',
  fields: [
    BlockConfig(),
    {
      type: 'text',
      name: 'title',
      label: 'Title',
      required: false
    },
    {
      type: 'richText',
      name: 'subTitle',
      label: 'Sub Title',
      required: false
    },
    {
      type: 'array',
      name: 'items',
      label: 'FAQ Items',
      admin: {
        description:
          'Note: only items with both a title and subtitle will be displayed'
      },
      required: false,
      fields: [
        {
          type: 'text',
          name: 'title',
          label: 'Title'
        },
        {
          type: 'richText',
          name: 'subTitle',
          label: 'Sub Title'
        }
      ]
    }
  ]
};

export default FAQBlock;
