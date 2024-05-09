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
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';
import dotenv from 'dotenv';
import path from 'path';
import { buildConfig } from 'payload/config';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

dotenv.config({ path: `${dirname}/../../.env` });

const DATABASE_URL =
  process.env.NODE_ENV === 'production' && LOCAL
    ? `${process.env.DATABASE_URL}?sslmode=require`
    : (process.env.DATABASE_URL as string);

export default buildConfig({
  db: postgresAdapter({
    pool: {
      connectionString: DATABASE_URL
    },
    push: false
  }),
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [...defaultFeatures]
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
    vercelBlobStorage({
      enabled: true,
      collections: {
        [Images.slug]: true
      },
      token: process.env.BLOB_READ_WRITE_TOKEN as string
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
  },
});
