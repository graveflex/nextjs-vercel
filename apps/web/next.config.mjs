import createNextIntlPlugin from 'next-intl/plugin';
import { BLOB_STORE_ID } from '@mono/settings';
import { withPayload } from '@payloadcms/next/withPayload';
import path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.dirname(fileURLToPath(import.meta.url));

const withNextIntl = createNextIntlPlugin();

const baseUrl = `https://${BLOB_STORE_ID}.public.blob.vercel-storage.com`;

async function rewrites() {
  return [
    {
      source: '/images/:filename*',
      destination: `${baseUrl}/:filename*`
    }
  ];
}

export default withPayload(
  withNextIntl({
    reactStrictMode: true,
    transpilePackages: ['@mono/ui', '@mono/theme', '@mono/types'],

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
    rewrites,
    webpack: (config) => {
      /*
      config.module.rules.push(
        {
          test: /\.svg$/i,
          type: 'asset',
          resourceQuery: /url/ // *.svg?url
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          resourceQuery: { not: [/(url|payloadcms)/] }, // exclude react component if *.svg?url
          use: ['@svgr/webpack']
        }
      );
      */

      return config;
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.unsplash.com'
        },
        {
          protocol: 'https',
          hostname: 'loremflickr.com'
        },
        {
          protocol: 'https',
          hostname: '*.vercel-storage.com'
        }
      ]
    }
  }),
  {
    configPath: path.resolve(dirname, `./payload.config.ts`),
    payloadPath: path.resolve(dirname, `./src/payload/payloadClient.ts`),
    adminRoute: '/admin'
  }
);
