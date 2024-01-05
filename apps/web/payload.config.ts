import { postgresAdapter } from '@payloadcms/db-postgres';
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { slateEditor } from '@payloadcms/richtext-slate';
import path from 'path';
import { buildConfig } from 'payload/config';
import { vercelBlobAdapter } from 'vercel-blob-storage';

import {
  BLOB_ENDPOINT_URL,
  BLOB_READ_WRITE_TOKEN,
  BLOB_STORE_ID,
  POSTGRES_URL
} from 'settings';

import Images from '@web/collections/Images';
import Users from '@web/collections/User';
import Nav from '@web/globals/Layout/Layout.config';

const adapter = vercelBlobAdapter({
  token: BLOB_READ_WRITE_TOKEN,
  endpointUrl: BLOB_ENDPOINT_URL,
  storeId: BLOB_STORE_ID
});

export default buildConfig({
  db: postgresAdapter({
    pool: {
      connectionString: POSTGRES_URL
    }
  }),
  editor: slateEditor({}),
  collections: [Users, Images],
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
    user: Users.slug
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
