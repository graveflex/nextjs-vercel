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

export default withPayload(
  withNextIntl({
    reactStrictMode: true,
    transpilePackages: ['@mono/ui', '@mono/types'],

    experimental: {
      reactCompiler: true
    },

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
    async rewrites() {
      return [
        {
          source: '/stories/',
          destination: '/stories/index.html'
        },
        {
          source: '/stories/:path*',
          destination: '/stories/:path*'
        },
        {
          source: '/images/:filename*',
          destination: `${baseUrl}/:filename*`
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
