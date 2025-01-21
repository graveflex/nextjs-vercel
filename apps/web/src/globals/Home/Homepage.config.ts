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
// InsertBlockConfigs
import TextImageBlock from '@mono/web/blocks/TextImageBlock/TextImageBlock.config';
import VideoBlock from '@mono/web/blocks/VideoBlock/VideoBlock.config';
import { WEB_URL } from '@mono/web/lib/constants';

import type { GlobalConfig } from 'payload';

import { invalidateCache } from '../../hooks/invalidateCache';
import { globalPublishBeforeRead } from '../../hooks/globalPublishBeforeRead';

const themeOptions = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' }
];

const HomePage: GlobalConfig = {
  slug: 'homepage',
  admin: {
    livePreview: {
      url: (doc) => {
        const {
          locale: { code }
        } = doc;
        return `${WEB_URL}/${code}/draft/`;
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
                IframeBlock,
                IconGridBlock,
                FullBleedImageBlock('Home'),
                SectionHeaderBlock('Home'),
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
      defaultValue: 'Home',
      admin: {
        position: 'sidebar',
        readOnly: true
      },
      required: true
    },
    {
      name: 'slug',
      label: 'Page Slug',
      type: 'text',
      unique: true,
      defaultValue: '/',
      admin: {
        readOnly: true,
        position: 'sidebar'
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
    beforeRead: [globalPublishBeforeRead],
    afterChange: [invalidateCache]
  }
};

export default HomePage;
