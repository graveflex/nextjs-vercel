import type { Meta, StoryObj } from '@storybook/react';

import type { HeroBlockType } from '.';
import HeroBlock from '.';

const meta: Meta<HeroBlockType> = {
  title: 'block/HeroBlock',
  component: HeroBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<HeroBlockType>;

export const Defaults: Story = {
  args: {
    blockConfig: {
      layout: 'imgLeftFull'
    },
    title: 'Hero block',
    subTitle: [
      {
        children: [
          {
            text: 'Here is some text'
          }
        ]
      }
    ],
    eyebrow: 'Eyebrow',
    cta: {
      href: 'https://google.com',
      label: 'Test'
    },
    input: {
      type: 'text'
    },
    image: {
      id: 1,
      alt: 'Myopic Logo',
      updatedAt: '2024-01-05T20:29:44.749Z',
      createdAt: '2024-01-05T20:29:44.749Z',
      url: '/images/Logo.svg',
      filename: 'Logo.svg',
      mimeType: 'image/svg+xml',
      filesize: 7144,
      width: 193,
      height: 17
    }
  }
};

export const MissingProps: Story = {
  args: {
    title: 'Hero block',
    subTitle: [
      {
        children: [
          {
            text: 'Here is some text'
          }
        ]
      }
    ],
    cta: {
      href: 'https://google.com',
      label: 'Test'
    },
    image: {
      id: 1,
      alt: 'Myopic Logo',
      updatedAt: '2024-01-05T20:29:44.749Z',
      createdAt: '2024-01-05T20:29:44.749Z',
      url: '/images/Logo.svg',
      filename: 'Logo.svg',
      mimeType: 'image/svg+xml',
      filesize: 7144,
      width: 193,
      height: 17
    }
  }
};
