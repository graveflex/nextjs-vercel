const path = require('path');
const { withPayload } = require('@payloadcms/next-payload');
const rewrites = require('./src/proxy/rewrites');

module.exports = withPayload(
  {
    reactStrictMode: true,
    transpilePackages: ['ui', 'settings', 'vercel-blob-storage'],
    compiler: {
      styledComponents: true
    }
  },
  {
    configPath: path.resolve(__dirname, `./payload.config.ts`),
    payloadPath: path.resolve(__dirname, `./src/payload/payloadClient.ts`),
    adminRoute: '/admin'
  }
);
