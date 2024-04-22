import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import CTA from '@mono/web/payload/fields/CTA';
import type { Block } from 'payload/types';

const TextImageBlock: Block = {
  slug: 'textImageBlock',
  interfaceName: 'TextImageBlockT',
  fields: [
    BlockConfig({
      fields: [
        {
          name: 'layout',
          label: 'Layout',
          required: false,
          type: 'select',
          options: [
            {
              label: 'Image on Right',
              value: 'imgRight'
            },
            {
              label: 'Image on Left',
              value: 'imgLeft'
            }
          ]
        }
      ]
    }),
    {
      type: 'text',
      name: 'title',
      localized: true,
      label: 'Title',
      required: false
    },
    {
      type: 'richText',
      name: 'content',
      localized: true,
      label: 'Content',
      required: false
    },
    {
      type: 'upload',
      relationTo: 'images',
      name: 'image',
      label: 'Image',
      required: false
    },
    CTA()
  ]
};

export default TextImageBlock;
