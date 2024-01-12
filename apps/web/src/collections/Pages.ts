import type { CollectionConfig, GroupField } from 'payload/types';

// InsertBlockConfigs
import HeroBlock from '@web/blocks/HeroBlock/HeroBlock.config';

const PageConfig: GroupField = {
  name: 'pageConfig',
  label: 'Page Configuration',
  interfaceName: 'pageConfigType',
  type: 'group',
  fields: [
    {
      type: 'text',
      name: 'slug',
      label: 'Slug',
      required: true
    }
  ]
};

const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true
  },
  fields: [
    PageConfig,
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
