import Authors from '@mono/web/collections/Authors';
import Files from '@mono/web/collections/Files';
import Images from '@mono/web/collections/Images';
import Pages from '@mono/web/collections/Pages';
import Posts from '@mono/web/collections/Posts';
import Tags from '@mono/web/collections/Tags/Tags.config';
import Users from '@mono/web/collections/User';
import Videos from '@mono/web/collections/Videos';
import { EyebrowFeature } from '@mono/web/components/RichText/Features/EyebrowFeature/server';
import BlogIndex from '@mono/web/globals/BlogIndex/BlogIndex.config';
import FourOhFour from '@mono/web/globals/FourOhFour/FourOhFour.config';
import Homepage from '@mono/web/globals/Home/Homepage.config';
import Nav from '@mono/web/globals/Layout/Layout.config';
// import nodeMailer from 'nodemailer';
import { DEFAULT_LOCALE, LOCALES } from '@mono/web/lib/constants';
import { translator } from '@payload-enchants/translator';
import { googleResolver } from '@payload-enchants/translator/resolvers/google';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { nodemailerAdapter } from '@payloadcms/email-nodemailer';
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder';
import { redirectsPlugin } from '@payloadcms/plugin-redirects';
import { seoPlugin } from '@payloadcms/plugin-seo';
import type { FeatureProviderServer } from '@payloadcms/richtext-lexical';
import {
  AlignFeature,
  BlockquoteFeature,
  BlocksFeature,
  BoldFeature,
  EXPERIMENTAL_TableFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineCodeFeature,
  InlineToolbarFeature,
  ItalicFeature,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  StrikethroughFeature,
  SubscriptFeature,
  SuperscriptFeature,
  UnderlineFeature,
  UnorderedListFeature,
  UploadFeature,
  lexicalEditor
} from '@payloadcms/richtext-lexical';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import CtaSectionsBlock from './src/blocks/CtaSectionsBlock/CtaSectionsBlock.config';

const DATABASE_URL = process.env.DATABASE_URL as string;

export default buildConfig({
  db: postgresAdapter({
    pool: {
      connectionString: DATABASE_URL
    },
    push: false
  }),
  editor: lexicalEditor({
    features: () =>
      [
        AlignFeature(),
        BoldFeature(),
        InlineCodeFeature(),
        ItalicFeature(),
        StrikethroughFeature(),
        SubscriptFeature(),
        SuperscriptFeature(),
        UnderlineFeature(),
        ParagraphFeature(),
        HeadingFeature({
          enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
        }),
        HorizontalRuleFeature(),
        UnorderedListFeature(),
        OrderedListFeature(),
        LinkFeature({
          fields: [
            {
              name: 'type',
              label: 'Type of Link',
              type: 'select',
              defaultValue: 'internal',
              options: [
                {
                  label: 'Internal',
                  value: 'internal'
                },
                {
                  label: 'External',
                  value: 'external'
                },
                {
                  label: 'Email',
                  value: 'email'
                },
                {
                  label: 'Phone',
                  value: 'phone'
                },
                {
                  label: 'File',
                  value: 'file'
                }
              ]
            },
            {
              name: 'internalUrl',
              label: 'Internal URL',
              type: 'relationship',
              relationTo: 'pages',
              admin: {
                condition: (_, siblingData) => siblingData.type === 'internal'
              }
            },
            {
              name: 'externalUrl',
              label: 'External URL',
              type: 'text',
              admin: {
                condition: (_, siblingData) => siblingData.type === 'external'
              }
            },
            {
              name: 'emailUrl',
              label: 'Email Address',
              type: 'text',
              admin: {
                condition: (_, siblingData) => siblingData.type === 'email'
              }
            },
            {
              name: 'phoneUrl',
              label: 'Phone Number',
              type: 'text',
              admin: {
                condition: (_, siblingData) => siblingData.type === 'phone'
              }
            },
            {
              name: 'file',
              label: 'File',
              type: 'upload',
              relationTo: 'files',
              admin: {
                condition: (_, siblingData) => siblingData.type === 'file'
              }
            }
          ]
        }),
        UploadFeature(),
        InlineToolbarFeature(),
        BlockquoteFeature(),
        EXPERIMENTAL_TableFeature(),
        FixedToolbarFeature(),
        EyebrowFeature()
      ] as FeatureProviderServer<unknown, unknown>[]
  }),
  collections: [Pages, Posts, Authors, Tags, Files, Images, Videos, Users],
  i18n: {
    fallbackLanguage: 'en'
  },
  localization: {
    locales: [...LOCALES],
    defaultLocale: DEFAULT_LOCALE,
    fallback: true
  },
  globals: [Nav, FourOhFour, Homepage, BlogIndex],
  routes: {
    api: '/api'
  },
  plugins: [
    seoPlugin({
      collections: ['pages', 'posts'],
      fields: ({ defaultFields }) => [
        ...defaultFields,
        {
          name: 'keywords',
          label: 'Keywords',
          type: 'text'
        }
      ],
      tabbedUI: true,
      uploadsCollection: 'images',
      generateTitle: ({ doc }) => `Monorepo | ${doc.pageTitle || doc.title}`,
      generateDescription: () => "Monorepo's description text"
    }),
    redirectsPlugin({
      collections: ['pages', 'posts']
    }),
    vercelBlobStorage({
      enabled: true,
      collections: {
        [Images.slug]: {
          disablePayloadAccessControl: true
        },
        [Files.slug]: true,
        [Videos.slug]: {
          disablePayloadAccessControl: true
        }
      },
      token: process.env.BLOB_READ_WRITE_TOKEN as string
    }),
    translator({
      // collections with the enabled translator in the admin UI
      collections: [
        'pages',
        'images',
        'files',
        'videos',
        'posts',
        'tags',
        'authors'
      ],
      // globals with the enabled translator in the admin UI
      globals: ['nav', 'four-oh-four'],
      // add resolvers that you want to include, examples on how to write your own in ./plugin/src/resolvers
      resolvers: [
        googleResolver({
          apiKey: process.env.GOOGLE_TRANSLATE_API_KEY as string
        })
      ]
    }),
    formBuilderPlugin({
      fields: {
        text: true,
        textarea: true,
        select: true,
        email: false,
        state: false,
        country: false,
        checkbox: false,
        number: false,
        message: false,
        payment: false
      }
    })
  ],
  upload: {
    limits: {
      fileSize: 5000000 // 5MB, written in bytes
    }
  },
  admin: {
    user: Users.slug,
    autoLogin: {
      email: 'dev@payloadcms.com',
      password: 'test',
      prefillOnly: true
    },
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 820,
          height: 1180
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1400,
          height: 900
        },
        {
          label: 'High Density',
          name: 'density',
          width: 2560,
          height: 1600
        }
      ],
      collections: ['pages']
    }
  },
  secret: process.env.PAYLOAD_SECRET || '',
  email: nodemailerAdapter({
    // skipVerify should actually be true if we want to verify creds. This is a known Payload bug that hasn't been fixed yet.
    skipVerify: true,
    defaultFromAddress: 'admin@graveflex.com',
    defaultFromName: 'Payload',
    transportOptions: {
      host: process.env.SMTP_HOST,
      port: 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    }
  }),
  typescript: {
    outputFile: '../../packages/types/payload-types.ts'
  },
  async onInit(payload) {
    const existingUsers = await payload.find({
      collection: 'users',
      limit: 1
    });

    if (existingUsers.docs.length === 0) {
      await payload.create({
        collection: 'users',
        data: {
          email: 'dev@payloadcms.com',
          password: 'test'
        }
      });
    }
  },
  sharp
});
