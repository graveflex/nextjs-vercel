import CtaSections from '@mono/web/blocks/CtaSections/CtaSections.config';

import CardGridBlock from '@mono/web/blocks/CardGridBlock/CardGridBlock.config';
import FAQBlock from '@mono/web/blocks/FAQBlock/FAQBlock.config';
import FormBlock from '@mono/web/blocks/FormBlock/FormBlock.config';
import FullBleedImageBlock from '@mono/web/blocks/FullBleedImageBlock/FullBleedImageBlock.config';
import GalleryGridBlock from '@mono/web/blocks/GalleryGridBlock/GalleryGridBlock.config';
import HeroBlock from '@mono/web/blocks/HeroBlock/HeroBlock.config';
import IconGridBlock from '@mono/web/blocks/IconGridBlock/IconGridBlock.config';
import IframeBlock from '@mono/web/blocks/IframeBlock/IframeBlock.config';
import MarkdownBlock from '@mono/web/blocks/MarkdownBlock/MarkdownBlock.config';
import SectionHeaderBlock from '@mono/web/blocks/SectionHeaderBlock/SectionHeaderBlock.config';
import TextImageBlock from '@mono/web/blocks/TextImageBlock/TextImageBlock.config';
import VideoBlock from '@mono/web/blocks/VideoBlock/VideoBlock.config';
import { WEB_URL } from '@mono/web/lib/constants';
import formatSlug from '@mono/web/payload/utils/formatSlug';
import type { CollectionConfig, Field } from 'payload';
import { text } from 'payload/shared';

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
    livePreview: {
      url: (doc) => {
        const {
          locale: { code }
        } = doc;
        const { slug } = doc.data;
        return `${WEB_URL}/${code}/draft/${slug}`;
      }
    }
  },
  access: {
    read: () => true
  },
  versions: {
    drafts: {
      autosave: true
    }
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Page Content',
          fields: [
            {
              name: 'blocks',
              label: 'Blocks',
              type: 'blocks',
              blocks: [
                // InsertBlockConfigFields
                CtaSections,
                IframeBlock,
                IconGridBlock,
                FullBleedImageBlock('Page'),
                SectionHeaderBlock('Page'),
                GalleryGridBlock,
                VideoBlock,
                FormBlock,
                CardGridBlock,
                MarkdownBlock,
                FAQBlock,
                TextImageBlock,
                HeroBlock
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'pageTitle',
      label: 'Page Title',
      type: 'text',
      localized: true,
      admin: {
        position: 'sidebar'
      },
      required: true
    },
    {
      name: 'slug',
      label: 'Page Slug',
      type: 'text',
      unique: true,
      validate: (value: string) => {
        const regex = /[!@#$%^*[()+=.]/;
        if (regex.test(value)) {
          return 'Slug cannot contain special characters !@]{${%^*()[+= or .';
        }
        if (value === '/') {
          return 'Slug cannot be / - this is reserved for the homepage global';
        }
        if (value === 'admin') {
          return 'Slug cannot be admin';
        }
        if (value === 'api') {
          return 'Slug cannot be api';
        }
        return true;
      },
      admin: {
        position: 'sidebar',
        description: 'Will be auto-generated to title if left blank.'
      },
      hooks: {
        beforeValidate: [formatSlug('pageTitle')]
      }
    } as Field,
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
    }
  ],
  hooks: {
    beforeRead: [publishBeforeRead],
    afterChange: [invalidateCache]
  }
};

export default Pages;
