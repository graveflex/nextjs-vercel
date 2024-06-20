import Input from '@mono/web/fields/Input/Input.config';
import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import CTA from '@mono/web/payload/fields/CTA';
import type { Block } from 'payload/types';

const HeroBlock: Block = {
  slug: 'heroBlock',
  interfaceName: 'HeroBlockT',
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
              label: 'Content on Right',
              value: 'contentRight'
            },
            {
              label: 'Content on Left',
              value: 'contentLeft'
            },
            {
              label: 'Content Centered',
              value: 'contentCenter'
            }
          ]
        }
      ]
    }),
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'images',
      required: false,
      admin: {
        description: 'Set Fill to true to make the image full-bleed'
      }
    },
    {
      type: 'text',
      name: 'eyebrow',
      localized: true,
      label: 'Eyebrow',
      required: false
    },
    {
      name: 'contentAlign',
      label: 'Content Alignment',
      required: false,
      type: 'select',
      admin: {
        description: 'If content flows from left, right, or center.'
      },
      options: [
        {
          label: 'Align Right',
          value: 'right'
        },
        {
          label: 'Align Left',
          value: 'left'
        },
        {
          label: 'Align Center',
          value: 'center'
        }
      ]
    },
    {
      type: 'text',
      name: 'title',
      localized: true,
      label: 'Title',
      required: false
    },
    {
      type: 'richText',
      name: 'subTitle',
      localized: true,
      label: 'Sub Title',
      required: false
    },
    Input(),
    CTA()
  ]
};

export default HeroBlock;
