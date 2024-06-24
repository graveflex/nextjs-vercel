import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import CTA from '@mono/web/payload/fields/CTA';
import TextInput from '@mono/web/payload/fields/TextInput';
import type { Block } from 'payload/types';

const HeroBlock: Block = {
  slug: 'heroBlock',
  interfaceName: 'HeroBlockT',
  fields: [
    BlockConfig(),
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
    },
    {
      name: 'contentAlign',
      label: 'Content Alignment',
      required: false,
      type: 'select',
      admin: {
        description: 'If copy flows from left, right, or center.'
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
      type: 'richText',
      name: 'content',
      localized: true,
      label: 'Content',
      required: false
    },
    {
      name: 'form',
      label: 'Form Fields',
      type: 'group',
      admin: {
        initCollapsed: true
      },
      fields: [
        TextInput(),
        CTA({
          admin: {
            description: 'Form Submit CTA.'
          }
        })
      ]
    },
    CTA()
  ]
};

export default HeroBlock;
