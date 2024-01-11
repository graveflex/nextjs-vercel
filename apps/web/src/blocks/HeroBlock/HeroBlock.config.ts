import type { Block } from 'payload/types';

import CTA from '@web/payload/fields/CTA';

const HeroBlock: Block = {
  slug: 'heroBlock',
  interfaceName: 'HeroBlockT',
  fields: [
    {
      type: 'text',
      name: 'title',
      label: 'Title',
      required: false
    },
    {
      type: 'text',
      name: 'subTitle',
      label: 'Sub Title',
      required: false
    },
    CTA(),
    {
      name: 'background',
      label: 'Background Image',
      type: 'upload',
      relationTo: 'images',
      required: false
    }
  ]
};

export default HeroBlock;
