import type { Block } from 'payload/types';

import BlockConfig from '@web/payload/fields/BlockConfig';

const TextImageBlock: Block = {
  slug: 'textImageBlock',
  interfaceName: 'TextImageBlockT',
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
      name: 'content',
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
    {
      type: 'group',
      name: 'blockOptions',
      label: 'Block Options',
      fields: [
        {
          type: 'select',
          name: 'contentSide',
          label: 'Which side should the content be on?',
          options: [
            {
              label: 'Left',
              value: 'left'
            },
            {
              label: 'Right',
              value: 'right'
            }
          ],
          defaultValue: 'left'
        }
      ]
    }
  ]
};

export default TextImageBlock;
