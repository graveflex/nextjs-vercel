const path = require('path');
const { withPayload } = require('@payloadcms/next-payload');

module.exports = withPayload(
  {
    reactStrictMode: true,
    transpilePackages: ['ui', 'settings'],
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
