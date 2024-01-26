import type { Block } from 'payload/types';

import Input from '@web/fields/Input/Input.config';
import CTA from '@web/payload/fields/CTA';

const HeroBlock: Block = {
  slug: 'heroBlock',
  interfaceName: 'HeroBlockT',
  fields: [
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
