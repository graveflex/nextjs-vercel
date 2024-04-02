import { WEB_URL } from '@mono/settings';
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
  admin: {
    preview: (doc, { locale }) => {
      const { slug } = (doc?.pageConfig as { slug: string }) || '/';

      if (slug) {
        // eslint-disable-next-line no-underscore-dangle
        const isDraft = !doc?._status || doc?._status === 'draft';
        return `${WEB_URL}${slug}?locale=${locale}&draft=${isDraft}`;
      }
      return null;
    }
  },
  access: {
    read: ({ req }) => {
      if (req.user) {
        return true;
      }
      return {
        and: [
          {
            publishedAt: {
              less_than: new Date().toJSON()
            },
            _status: {
              equals: 'published'
            }
          }
        ]
      };
    }
  },
  versions: {
    drafts: true
  },
  fields: [
    SEOConfig(),
    PageConfig,
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
        FAQBlock,
        TextImageBlock,
        HeroBlock
      ]
    }
  ]
};

export default Pages;
