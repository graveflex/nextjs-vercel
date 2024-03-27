const path = require('path');
const { withPayload } = require('@payloadcms/next-payload');
const { BLOB_STORE_ID } = require('@mono/settings');

const baseUrl = `https://${BLOB_STORE_ID}.public.blob.vercel-storage.com`;

async function rewrites() {
  return [
    {
      source: '/images/:filename*',
      destination: `${baseUrl}/:filename*`
    }
  ];
}

module.exports = withPayload(
  {
    reactStrictMode: true,
    transpilePackages: ['@mono/ui', '@mono/settings', 'vercel-blob-storage'],

    compiler: {
      styledComponents: {
        // Enabled by default in development, disabled in production to reduce file size,
        // setting this will override the default for all environments.
        displayName: true,
        // Enabled by default.
        ssr: true,
        // Enabled by default.
        fileName: true,

        topLevelImportPaths: ['@refract-ui/sc', 'styled-components'],

        // Defaults to ["index"].
        meaninglessFileNames: ['index'],

        // Enabled by default.
        cssProp: true,

        // Empty by default.
        // namespace: '',

        // Not supported yet.
        minify: true,

        // Not supported yet.
        transpileTemplateLiterals: true,

        // Not supported yet.
        pure: true
      }
    },
    rewrites
  },
  {
    configPath: path.resolve(__dirname, `./payload.config.ts`),
    payloadPath: path.resolve(__dirname, `./src/payload/payloadClient.ts`),
    adminRoute: '/admin'
  }
);
