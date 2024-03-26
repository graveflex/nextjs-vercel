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
      styledComponents: true
    },
    rewrites
  },
  {
    configPath: path.resolve(__dirname, `./payload.config.ts`),
    payloadPath: path.resolve(__dirname, `./src/payload/payloadClient.ts`),
    adminRoute: '/admin'
  }
);
