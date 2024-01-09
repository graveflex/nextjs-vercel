import type { Meta, StoryObj } from '@storybook/react';

import type { LayoutType } from '.';
import Layout from '.';

const meta: Meta<LayoutType> = {
  title: 'web/Layout',
  component: Layout,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<LayoutType>;

export const Defaults: Story = {
  args: {
    header: {
      logo: {
        id: 1,
        alt: 'Myopic Logo',
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
      },
      main: [
        {
          id: '659866bdb500ff8e7a9c7283',
          label: 'Menu item',
          slug: '/',
          type: 'link'
        },
        {
          id: '659866c4b500ff8e7a9c7285',
          label: 'Menu item',
          slug: '/',
          type: 'link'
        },
        {
          id: '659866cab500ff8e7a9c7287',
          label: 'Menu item',
          slug: '/',
          type: 'link'
        },
        {
          id: '659866cfb500ff8e7a9c7289',
          label: 'Button',
          slug: '/',
          type: 'button'
        }
      ]
    },
    footer: {
      copyright: '2023 All rights reserved',
      secondary: [
        {
          id: '659866d8b500ff8e7a9c728b',
          label: 'Menu item',
          slug: '/',
          type: 'link'
        },
        {
          id: '659866dfb500ff8e7a9c728d',
          label: 'Menu item',
          slug: '/',
          type: 'link'
        },
        {
          id: '659866e5b500ff8e7a9c728f',
          label: 'Menu item',
          slug: '/',
          type: 'link'
        }
      ]
    }
  }
};

export const MissingMenu: Story = {
  args: {
    header: {
      logo: {
        id: 1,
        alt: 'Myopic Logo',
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
      },
      main: [
        {
          id: '659866bdb500ff8e7a9c7283',
          label: 'Menu item',
          slug: '/',
          type: 'link'
        },
        {
          id: '659866c4b500ff8e7a9c7285',
          label: 'Menu item',
          slug: '/'
        },
        {
          id: '659866cab500ff8e7a9c7287',
          label: 'Menu item',
          slug: '/'
        },
        {
          id: '659866cfb500ff8e7a9c7289',
          label: 'Button',
          slug: '/',
          type: 'button'
        }
      ]
    },
    footer: {
      copyright: '2023 All rights reserved',
      secondary: []
    }
  }
};
