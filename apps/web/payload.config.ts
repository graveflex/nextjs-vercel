import {
  DEFAULT_LOCALE,
  LOCAL,
  LOCALE_SETTINGS,
  WEB_URL
} from '@mono/settings';
import Images from '@mono/web/collections/Images';
import Pages from '@mono/web/collections/Pages';
import Users from '@mono/web/collections/User';
import Nav from '@mono/web/globals/Layout/Layout.config';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import type { FeatureProviderServer } from '@payloadcms/richtext-lexical';
import {
  AlignFeature,
  BoldFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineCodeFeature,
  ItalicFeature,
  lexicalEditor,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  StrikethroughFeature,
  SubscriptFeature,
  SuperscriptFeature,
  UnderlineFeature,
  UnorderedListFeature,
  UploadFeature
} from '@payloadcms/richtext-lexical';
import dotenv from 'dotenv';
import path from 'path';
import { buildConfig } from 'payload/config';
import { vercelBlobAdapter } from 'payload-cloud-storage-vercel-adapter';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

dotenv.config({ path: `${dirname}/../../.env` });

const DATABASE_URL =
  process.env.NODE_ENV === 'production' && LOCAL
    ? `${process.env.DATABASE_URL}?sslmode=require`
    : (process.env.DATABASE_URL as string);

const adapter = vercelBlobAdapter({
  token: process.env.BLOB_READ_WRITE_TOKEN as string,
  storeId: process.env.BLOB_STORE_ID as string
});

export default buildConfig({
  db: postgresAdapter({
    pool: {
      connectionString: DATABASE_URL
    }
  }),
  editor: lexicalEditor({
    features: () =>
      [
        AlignFeature(),
        BoldFeature(),
        InlineCodeFeature(),
        ItalicFeature(),
        StrikethroughFeature(),
        SubscriptFeature(),
        SuperscriptFeature(),
        UnderlineFeature(),
        ParagraphFeature(),
        HeadingFeature({
          enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
        }),
        HorizontalRuleFeature(),
        UnorderedListFeature(),
        OrderedListFeature(),
        LinkFeature({
          fields: [
            {
              name: 'type',
              label: 'Type of Link',
              type: 'select',
              defaultValue: 'internal',
              options: [
                {
                  label: 'Internal',
                  value: 'internal'
                },
                {
                  label: 'External',
                  value: 'external'
                },
                {
                  label: 'Email',
                  value: 'email'
                },
                {
                  label: 'Phone',
                  value: 'phone'
                },
                {
                  label: 'File',
                  value: 'file'
                }
              ]
            },
            {
              name: 'internalUrl',
              label: 'Internal URL',
              type: 'relationship',
              relationTo: 'pages',
              admin: {
                condition: (_, siblingData) => siblingData.type === 'internal'
              }
            },
            {
              name: 'externalUrl',
              label: 'External URL',
              type: 'text',
              admin: {
                condition: (_, siblingData) => siblingData.type === 'external'
              }
            },
            {
              name: 'emailUrl',
              label: 'Email Address',
              type: 'text',
              admin: {
                condition: (_, siblingData) => siblingData.type === 'email'
              }
            },
            {
              name: 'phoneUrl',
              label: 'Phone Number',
              type: 'text',
              admin: {
                condition: (_, siblingData) => siblingData.type === 'phone'
              }
            },
            {
              name: 'file',
              label: 'File',
              type: 'upload',
              relationTo: 'files',
              admin: {
                condition: (_, siblingData) => siblingData.type === 'file'
              }
            },
            {
              name: 'newTab',
              label: 'Open in new tab',
              type: 'checkbox'
            }
          ]
        }),
        UploadFeature()
      ] as FeatureProviderServer<unknown, unknown>[]
  }),
  collections: [Pages, Users, Images],
  i18n: {
    fallbackLanguage: DEFAULT_LOCALE
  },
  localization: {
    locales: LOCALE_SETTINGS,
    defaultLocale: DEFAULT_LOCALE,
    fallback: true
  },
  globals: [Nav],
  routes: {
    api: '/api'
  },
  plugins: [
    cloudStorage({
      collections: {
        images: {
          adapter
        }
      }
    })
  ],
  upload: {
    limits: {
      fileSize: 5000000 // 5MB, written in bytes
    }
  },
  admin: {
    user: Users.slug,
    livePreview: {
      url: ({ data }) => {
        return `${WEB_URL}/${data?.slug}`;
      },
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 820,
          height: 1180
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1400,
          height: 900
        },
        {
          label: 'High Density',
          name: 'density',
          width: 2560,
          height: 1600
        }
      ],
      collections: ['pages']
    }
  },
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, '../../packages/types/payload-types.ts')
  }
});
