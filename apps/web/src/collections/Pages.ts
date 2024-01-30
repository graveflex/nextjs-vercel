import type { CollectionConfig, GroupField } from 'payload/types';

import HeroBlock from '@web/blocks/HeroBlock/HeroBlock.config';
// InsertBlockConfigs
import TextImageBlock from '@web/blocks/TextImageBlock/TextImageBlock.config';

/* import themeOptions from 'theme/src/themeOptions'; */

const themeOptions = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' }
];

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
    },
    {
      name: 'theme',
      label: 'Theme',
      type: 'select',
      required: false,
      options: themeOptions
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
        TextImageBlock,

        HeroBlock
      ]
    }
  ]
};

export default Pages;
