import type { CollectionConfig } from 'payload/types';

import HeroBlock from '@web/blocks/HeroBlock/HeroBlock.config';

const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'blocks',
      label: 'Blocks',
      type: 'blocks',
      blocks: [HeroBlock]
    }
  ]
};

export default Pages;
