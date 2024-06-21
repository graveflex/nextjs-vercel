import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import CTA from '@mono/web/payload/fields/CTA';
import TextInput from '@mono/web/payload/fields/TextInput';
import type { Block } from 'payload/types';

const TextImageBlock: Block = {
  slug: 'textImageBlock',
  interfaceName: 'TextImageBlockT',
  fields: [
    BlockConfig(),
    {
      name: 'layout',
      label: 'Layout',
      required: false,
      type: 'select',
      admin: {
        description: 'Select the layout of the block'
      },
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
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'images',
      required: false,
      admin: {
        description:
          'The image that will be displayed in its selected position.'
      }
    },
    {
      name: 'video',
      label: 'Video',
      type: 'upload',
      relationTo: 'videos',
      required: false,
      admin: {
        description: 'If a video is uploaded, the image will not be displayed.'
      }
    },
    {
      type: 'richText',
      name: 'content',
      localized: true,
      label: 'Content',
      required: false,
      admin: {
        description: 'The content that will be displayed in the block.'
      }
    },
    {
      type: 'array',
      name: 'items',
      label: 'CTA',
      required: false,
      localized: true,
      fields: [CTA({ name: 'textImage' })]
    },
    TextInput(),
    CTA({
      admin: {
        description: 'Form Submit CTA.'
      }
    })
  ]
};

export default TextImageBlock;
