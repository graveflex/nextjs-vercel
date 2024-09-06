import path from 'path';
import { fileURLToPath } from 'url';
import { withPayload } from '@payloadcms/next/withPayload';
import createNextIntlPlugin from 'next-intl/plugin';

const BLOB_STORE_ID = process.env.BLOB_STORE_ID;

if (process.env.CI) {
  process.env.NODE_ENV = 'production';
}

const dirname = path.dirname(fileURLToPath(import.meta.url));

const withNextIntl = createNextIntlPlugin();

const baseUrl = `https://${BLOB_STORE_ID}.public.blob.vercel-storage.com`;

export const serverUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${process.env.NEXT_PORT}`;

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

    /*
    experimental: {
      reactCompiler: false
    },
    */

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
      formats: ['image/avif', 'image/webp'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
      imageSizes: [16, 32, 48, 64, 96, 128, 256],
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
    },
    async headers() {
      return [
        {
          source: `/:path*`,
          headers: [
            { key: 'Access-Control-Allow-Credentials', value: 'true' },
            { key: 'Access-Control-Allow-Origin', value: serverUrl },
            {
              key: 'Access-Control-Allow-Methods',
              value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT'
            },
            {
              key: 'Access-Control-Allow-Headers',
              value:
                'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
            }
          ]
        }
      ];
    }
  }),
  {
    configPath: path.resolve(dirname, `./payload.config.ts`),
    payloadPath: path.resolve(dirname, `./src/payload/payloadClient.ts`),
    adminRoute: '/admin'
  }
);
