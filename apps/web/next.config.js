const path = require('path');
const { withPayload } = require('@payloadcms/next-payload');
const { WEB_URL, NEXT_PORT } = require('settings');

const assetDomain = new URL(WEB_URL).hostname;

const assetImagePattern = {
  protocol: assetDomain === 'localhost' ? 'http' : 'https',
  hostname: assetDomain,
  port: assetDomain === 'localhost' ? NEXT_PORT : undefined,
  pathname: '/media/**'
};

module.exports = withPayload(
  {
    reactStrictMode: true,
    transpilePackages: ['ui', 'settings'],
    compiler: {
      styledComponents: true
    },
    images: {
      domains: [assetDomain],
      remotePatterns: [assetImagePattern]
    }
  },
  {
    configPath: path.resolve(__dirname, `./payload.config.ts`),
    payloadPath: path.resolve(__dirname, `./src/payload/payloadClient.ts`),
    adminRoute: '/admin'
  }
);
