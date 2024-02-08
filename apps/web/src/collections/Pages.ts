import type { CollectionConfig, GroupField } from 'payload/types';

import FAQBlock from '@web/blocks/FAQBlock/FAQBlock.config';
import HeroBlock from '@web/blocks/HeroBlock/HeroBlock.config';
import HeroRevealBlock from '@web/blocks/HeroRevealBlock/HeroRevealBlock.config';
// InsertBlockConfigs
import ParallaxBackground from '@web/blocks/ParallaxBackground/ParallaxBackground.config';
import TextImageBlock from '@web/blocks/TextImageBlock/TextImageBlock.config';
import SEOConfig from '@web/payload/fields/SEO';
import { themeOptions } from '../payload/fields/BlockConfig';

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
        ParallaxBackground,

        HeroRevealBlock,

        FAQBlock,
        TextImageBlock,
        HeroBlock
      ]
    }
  ]
};

export default Pages;
