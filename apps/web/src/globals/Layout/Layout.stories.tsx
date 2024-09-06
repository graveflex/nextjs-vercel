import type { Meta, StoryObj } from '@storybook/react';
import { NextIntlClientProvider } from 'next-intl';

import Layout from './Layout.client';
import type { LayoutType } from './Layout.client.tsx';

import messages from '../../../messages/en-US.json';

const meta: Meta<LayoutType> = {
  title: 'web/Layout',
  component: Layout,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  decorators: (Story) => (
    <NextIntlClientProvider messages={messages} locale="en-US">
      {Story()}
    </NextIntlClientProvider>
  )
};

export default meta;
type Story = StoryObj<LayoutType>;

export const Defaults: Story = {
  args: {
    header: {
      logo: {
        id: 1,
        alt: 'Sample Logo',
        updatedAt: '2024-01-05T20:29:44.749Z',
        createdAt: '2024-01-05T20:29:44.749Z',
        url: '/images/Logo.svg',
        filename: 'Logo.svg',
        mimeType: 'image/svg+xml',
        filesize: 7144,
        width: 193,
        height: 17,
        sizes: {
          thumbnail: {
            url: null,
            width: null,
            height: null,
            mimeType: null,
            filesize: null,
            filename: null
          },
          mobile: {
            url: null,
            width: null,
            height: null,
            mimeType: null,
            filesize: null,
            filename: null
          },
          tablet: {
            url: null,
            width: null,
            height: null,
            mimeType: null,
            filesize: null,
            filename: null
          },
          desktop: {
            url: null,
            width: null,
            height: null,
            mimeType: null,
            filesize: null,
            filename: null
          },
          ultrawide: {
            url: null,
            width: null,
            height: null,
            mimeType: null,
            filesize: null,
            filename: null
          }
        }
      }
    },
    footer: {}
  }
};
