import { postgresAdapter } from '@payloadcms/db-postgres';
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import dotenv from 'dotenv';
import path from 'path';
import { buildConfig } from 'payload/config';
import { vercelBlobAdapter } from 'vercel-blob-storage';

import { LOCAL, WEB_URL } from 'settings';

import Images from '@web/collections/Images';
import Pages from '@web/collections/Pages';
import Users from '@web/collections/User';
import Nav from '@web/globals/Layout/Layout.config';

dotenv.config({ path: `${__dirname}/../../.env` });

const POSTGRES_URL =
  process.env.NODE_ENV === 'production' && LOCAL === 'false'
    ? `${process.env.POSTGRES_URL}?sslmode=require`
    : process.env.POSTGRES_URL;

const adapter = vercelBlobAdapter({
  token: process.env.BLOB_READ_WRITE_TOKEN,
  endpointUrl: process.env.BLOB_ENDPOINT_URL,
  storeId: process.env.BLOB_STORE_ID
});

export default buildConfig({
  db: postgresAdapter({
    pool: {
      connectionString: POSTGRES_URL
    }
  }),
  collections: [Pages, Users, Images],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [...defaultFeatures]
  }),
  globals: [Nav],
  routes: {
    api: '/api/payload'
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
        return `${WEB_URL}${data?.pageConfig?.slug}`;
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
  typescript: {
    outputFile: path.resolve(__dirname, './src/payload/payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(
      __dirname,
      './src/payload/generated-schema.graphql'
    )
  }
});
