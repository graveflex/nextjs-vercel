import type { Meta, StoryObj } from '@storybook/react';

import type { PayloadImageT } from '@web/primitives/primatives';

import ResponsivePayloadImage from '.';

const meta: Meta<PayloadImageT> = {
  title: 'web/ResponsivePayloadImage',
  component: ResponsivePayloadImage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<unknown>;

const randomImage = 'https://source.unsplash.com/random';

export const Defaults: Story = {
  args: {
    id: 17,
    alt: 'Students',
    filename: 'module0.jpg',
    mimeType: 'image/jpeg',
    filesize: 3664901,
    width: 5336,
    height: 3766,
    sizes: {
      thumbnail: {
        width: 300,
        height: 211,
        mimeType: 'image/jpeg',
        filesize: 13968,
        filename: 'module0-300x211.jpg',
        url: randomImage
      },
      mobile: {
        width: 1024,
        height: 722,
        mimeType: 'image/jpeg',
        filesize: 101228,
        filename: 'module0-1024x722.jpg',
        url: randomImage
      },
      desktop: {
        width: 2048,
        height: 1445,
        mimeType: 'image/jpeg',
        filesize: 376199,
        filename: 'module0-2048x1445.jpg',
        url: randomImage
      },
      ultrawide: {
        width: 4096,
        height: 2891,
        mimeType: 'image/jpeg',
        filesize: 1557423,
        url: randomImage
      }
    },
    createdAt: '2023-09-13T16:32:11.202Z',
    updatedAt: '2023-09-13T16:32:11.202Z',
    url: randomImage,
    imageProps: {
      fill: false
    },
    additionalProps: {
      isRounded: true,
      aspectRatio: '16/9',
      objectFit: 'cover'
    }
  }
};

export const NoSizes: Story = {
  args: {
    id: 17,
    alt: 'Students',
    filename: 'module0.jpg',
    mimeType: 'image/jpeg',
    filesize: 3664901,
    width: 5336,
    height: 3766,
    createdAt: '2023-09-13T16:32:11.202Z',
    updatedAt: '2023-09-13T16:32:11.202Z',
    url: randomImage
  }
};

export const NoSizesNoAlt: Story = {
  args: {
    id: 17,
    filename: 'module0.jpg',
    mimeType: 'image/jpeg',
    filesize: 3664901,
    width: 5336,
    height: 3766,
    createdAt: '2023-09-13T16:32:11.202Z',
    updatedAt: '2023-09-13T16:32:11.202Z',
    url: randomImage
  }
};

export const NoAlt: Story = {
  args: {
    id: 18,
    filename: 'module0.jpg',
    mimeType: 'image/jpeg',
    filesize: 3664901,
    width: 5336,
    height: 3766,
    sizes: {
      thumbnail: {
        width: 300,
        height: 211,
        mimeType: 'image/jpeg',
        filesize: 13968,
        filename: 'module0-300x211.jpg',
        url: randomImage
      },
      mobile: {},
      desktop: {
        width: 2048,
        height: 1445,
        mimeType: 'image/jpeg',
        filesize: 376199,
        filename: 'module0-2048x1445.jpg',
        url: randomImage
      },
      ultrawide: {
        width: 4096,
        height: 2891,
        mimeType: 'image/jpeg',
        filesize: 1557423,
        filename: 'module0-4096x2891.jpg',
        url: randomImage
      }
    },
    createdAt: '2023-09-13T16:32:11.202Z',
    updatedAt: '2023-09-13T16:32:11.202Z',
    url: randomImage
  }
};

export const Null: Story = {
  args: {
    image: {
      id: 19,
      filename: 'module0.jpg',
      mimeType: 'image/jpeg',
      filesize: 3664901,
      width: 5336,
      height: 3766,
      createdAt: '2023-09-13T16:32:11.202Z',
      updatedAt: '2023-09-13T16:32:11.202Z'
    }
  }
};

export const SrcSet: Story = {
  args: {
    id: 2,
    alt: 'test',
    updatedAt: '2024-01-09T21:42:47.363Z',
    createdAt: '2024-01-09T21:42:47.363Z',
    url: 'http://localhost:3000/images/small-image-2-1024x768.jpg',
    filename: 'small-image-2-1024x768.jpg',
    mimeType: 'image/jpeg',
    filesize: 77483,
    width: 1024,
    height: 768,
    sizes: {
      thumbnail: {
        url: 'http://localhost:3000/images/small-image-2-1024x768-300x225.jpg',
        width: 300,
        height: 225,
        mimeType: 'image/jpeg',
        filesize: 14412,
        filename: 'small-image-2-1024x768-300x225.jpg'
      },

      mobile: {
        url: 'http://localhost:3000/images/small-image-2-1024x768-768x576.jpg',
        width: 768,
        height: 576,
        mimeType: 'image/jpeg',
        filesize: 54046,
        filename: 'small-image-2-1024x768-768x576.jpg'
      },

      tablet: {
        url: 'http://localhost:3000/images/small-image-2-1024x768-1024x768.jpg',
        width: 1024,
        height: 768,
        mimeType: 'image/jpeg',
        filesize: 77509,
        filename: 'small-image-2-1024x768-1024x768.jpg'
      },

      desktop: {
        url: 'http://localhost:3000/images/small-image-2-1024x768-2048x1536.jpg',
        width: 2048,
        height: 1536,
        mimeType: 'image/jpeg',
        filesize: 191938,
        filename: 'small-image-2-1024x768-2048x1536.jpg'
      },

      ultrawide: {
        url: 'http://localhost:3000/images/small-image-2-1024x768-4096x3072.jpg',
        width: 4096,
        height: 3072,
        mimeType: 'image/jpeg',
        filesize: 519951,
        filename: 'small-image-2-1024x768-4096x3072.jpg'
      }
    }
  }
};
