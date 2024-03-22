import { faker } from '@faker-js/faker';
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
    subTitle: {
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,
        children: [
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'Regular paragraph',
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1
              }
            ],
            direction: 'ltr'
          }
        ],
        direction: 'ltr'
      }
    },
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
      url: faker.image.abstract(1200),
      filename: 'Logo.svg',
      mimeType: 'image/svg+xml',
      filesize: 7144,
      width: 193,
      height: 17,
      imageProps: {
        fill: true
      },
      additionalProps: {
        isRounded: true,
        aspectRatio: '16/9',
        style: `{
          objectFit: 'cover'
        }`
      }
    }
  }
};

export const MissingProps: Story = {
  args: {
    title: 'Hero block',
    subTitle: {
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,
        children: [
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'Regular paragraph',
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1
              }
            ],
            direction: 'ltr'
          }
        ],
        direction: 'ltr'
      }
    },
    cta: {
      href: 'https://google.com',
      label: 'Test'
    },
    image: {
      id: 1,
      alt: 'Myopic Logo',
      updatedAt: '2024-01-05T20:29:44.749Z',
      createdAt: '2024-01-05T20:29:44.749Z',
      url: faker.image.abstract(1200),
      filename: 'Logo.svg',
      mimeType: 'image/svg+xml',
      filesize: 7144,
      width: 193,
      height: 17
    }
  }
};
