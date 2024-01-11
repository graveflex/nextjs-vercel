import type { CollectionConfig } from 'payload/types';

// InsertBlockConfigs
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
      blocks: [
        // InsertBlockConfigFields
        HeroBlock
      ]
    }
  ]
};

export default Pages;
