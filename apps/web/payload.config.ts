import { LOCAL, WEB_URL } from '@mono/settings';
import Images from '@mono/web/collections/Images';
import Pages from '@mono/web/collections/Pages';
import Users from '@mono/web/collections/User';
import Nav from '@mono/web/globals/Layout/Layout.config';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { slateEditor } from '@payloadcms/richtext-slate';
import dotenv from 'dotenv';
import path from 'path';
import { buildConfig } from 'payload/config';
import { vercelBlobAdapter } from 'vercel-blob-storage';

dotenv.config({ path: `${__dirname}/../../.env` });

const POSTGRES_URL =
  process.env.NODE_ENV === 'production' && LOCAL
    ? `${process.env.POSTGRES_URL}?sslmode=require`
    : (process.env.POSTGRES_URL as string);

const adapter = vercelBlobAdapter({
  token: process.env.BLOB_READ_WRITE_TOKEN as string,
  endpointUrl: process.env.BLOB_ENDPOINT_URL as string,
  storeId: process.env.BLOB_STORE_ID as string
});

export default buildConfig({
  db: postgresAdapter({
    pool: {
      connectionString: POSTGRES_URL
    }
  }),
  editor: slateEditor({}),
  collections: [Pages, Users, Images],
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
