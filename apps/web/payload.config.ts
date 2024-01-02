import { postgresAdapter } from '@payloadcms/db-postgres';
import { slateEditor } from '@payloadcms/richtext-slate';
import path from 'path';
import { buildConfig } from 'payload/config';

import { POSTGRES_URL } from 'settings';

import Layout from '@web/globals/Layout/schema';
import Media from '@web/payload/collections/Media';
import Page from '@web/payload/collections/Page';
import Users from '@web/payload/collections/User';

export default buildConfig({
  db: postgresAdapter({
    pool: {
      connectionString: POSTGRES_URL
    }
  }),
  editor: slateEditor({}),
  collections: [Users, Media, Page],
  globals: [Layout],
  routes: {
    api: '/api/payload'
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
