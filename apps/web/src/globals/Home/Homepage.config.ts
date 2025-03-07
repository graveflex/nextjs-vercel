import { allBlocks } from '@mono/web/lib/blockList';
// InsertBlockConfigs
import { WEB_URL } from '@mono/web/lib/constants';

import type { GlobalConfig } from 'payload';

import { globalInvalidateCache } from '@mono/web/hooks/globalInvalidateCache';
import { globalPublishBeforeRead } from '@mono/web/hooks/globalPublishBeforeRead';

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
              blocks: allBlocks('homepage')
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
    afterChange: [globalInvalidateCache]
  }
};

export default HomePage;
