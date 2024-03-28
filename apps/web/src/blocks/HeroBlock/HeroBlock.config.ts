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
              label: 'Background Image',
              value: 'bg'
            },
            {
              label: 'Image on Right',
              value: 'imgRight'
            },
            {
              label: 'Image on Left',
              value: 'imgLeft'
            },
            {
              label: 'Image Right -- Full Bleed',
              value: 'imgRightFull'
            },
            {
              label: 'Image Left -- Full Bleed',
              value: 'imgLeftFull'
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
      required: false
    },
    {
      type: 'text',
      name: 'eyebrow',
      label: 'Eyebrow',
      required: false
    },
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
    Input(),
    CTA()
  ]
};

export default HeroBlock;
