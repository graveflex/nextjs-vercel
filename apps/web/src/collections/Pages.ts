import { WEB_URL } from '@mono/settings';
import CardGridBlock from '@mono/web/blocks/CardGridBlock/CardGridBlock.config';
import FAQBlock from '@mono/web/blocks/FAQBlock/FAQBlock.config';
import HeroBlock from '@mono/web/blocks/HeroBlock/HeroBlock.config';
import MarkdownBlock from '@mono/web/blocks/MarkdownBlock/MarkdownBlock.config';
import TextImageBlock from '@mono/web/blocks/TextImageBlock/TextImageBlock.config';
// InsertBlockConfigs
import VideoBlock from '@mono/web/blocks/VideoBlock/VideoBlock.config';
import SEOConfig from '@mono/web/payload/fields/SEO';
import formatSlug from '@mono/web/payload/utils/formatSlug';
import type { CollectionConfig } from 'payload/types';

import { invalidateCache } from '../hooks/invalidateCache';
import { publishBeforeRead } from '../hooks/publishBeforeRead';

const themeOptions = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' }
];

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'pageTitle',
    defaultColumns: ['pageTitle', 'slug', '_status', 'createdAt'],
    preview: (doc, { locale }) => {
      const { slug } = (doc as { slug: string }) || '/';

      if (slug) {
        // eslint-disable-next-line no-underscore-dangle
        const isDraft = !doc?._status || doc?._status === 'draft';
        return `${WEB_URL}/${slug}?locale=${locale}&draft=${isDraft}`;
      }
      return null;
    }
  },
  access: {
    read: () => true
  },
  versions: {
    drafts: true
  },
  fields: [
    {
      name: 'pageTitle',
      label: 'Page Title',
      type: 'text',
      admin: {
        position: 'sidebar'
      },
      required: true
    },
    {
      name: 'slug',
      label: 'Page Slug',
      type: 'text',
      admin: {
        position: 'sidebar',
        description: 'Will be auto-generated to title if left blank.'
      },
      hooks: {
        beforeValidate: [formatSlug('pageTitle')]
      }
    },
    {
      name: 'theme',
      label: 'Theme',
      type: 'select',
      admin: {
        position: 'sidebar'
      },
      required: false,
      options: themeOptions
    },
    SEOConfig(),
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Published At',
      admin: {
        description:
          'If the current time is before this date, the page will not render',
        date: {
          pickerAppearance: 'dayAndTime'
        },
        position: 'sidebar'
      },
      defaultValue: () => new Date().toJSON()
    },
    {
      name: 'blocks',
      label: 'Blocks',
      type: 'blocks',
      blocks: [
        // InsertBlockConfigFields
        VideoBlock,
        CardGridBlock,
        MarkdownBlock,

        FAQBlock,
        TextImageBlock,
        HeroBlock
      ]
    }
  ],
  hooks: {
    beforeRead: [publishBeforeRead],
    afterChange: [invalidateCache]
  }
};

export default Pages;
