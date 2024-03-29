// InsertBlockConfigs
import FAQBlock from '@mono/web/blocks/FAQBlock/FAQBlock.config';
import HeroBlock from '@mono/web/blocks/HeroBlock/HeroBlock.config';
import TextImageBlock from '@mono/web/blocks/TextImageBlock/TextImageBlock.config';
import SEOConfig from '@mono/web/payload/fields/SEO';
import type { CollectionConfig, GroupField } from 'payload/types';

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
  versions: {
    drafts: true
  },
  fields: [
    SEOConfig(),
    PageConfig,
    {
      name: 'blocks',
      label: 'Blocks',
      type: 'blocks',
      blocks: [
        // InsertBlockConfigFields
        FAQBlock,
        TextImageBlock,
        HeroBlock
      ]
    }
  ]
};

export default Pages;
