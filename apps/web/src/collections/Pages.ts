import { WEB_URL } from '@mono/web/lib/constants';
import formatSlug from '@mono/web/payload/utils/formatSlug';
import type { CollectionConfig, Field } from 'payload';
import { allBlocks } from '@mono/web/lib/blockList';

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
              blocks: allBlocks
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
