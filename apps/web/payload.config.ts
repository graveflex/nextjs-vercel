import { postgresAdapter } from '@payloadcms/db-postgres';
import { slateEditor } from '@payloadcms/richtext-slate';
import path from 'path';
import { buildConfig } from 'payload/config';

import { POSTGRES_URL } from 'settings';

import collections from '@web/payload/collections';
import Users from '@web/payload/collections/User';
import globals from '@web/payload/globals';

export default buildConfig({
  db: postgresAdapter({
    pool: {
      connectionString: POSTGRES_URL
    }
  }),
  editor: slateEditor({}),
  collections: Object.values(collections),
  globals: Object.values(globals),
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
