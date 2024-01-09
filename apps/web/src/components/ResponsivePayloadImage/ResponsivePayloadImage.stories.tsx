import type { Meta, StoryObj } from '@storybook/react';

import type { ResponsivePayloadImageType } from '.';
import ResponsivePayloadImage from '.';

const meta: Meta<ResponsivePayloadImageType> = {
  title: 'web/ResponsivePayloadImage',
  component: ResponsivePayloadImage,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<ResponsivePayloadImageType>;

const randomImage = 'https://source.unsplash.com/random';

export const Defaults: Story = {
  args: {
    image: {
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
      url: randomImage
    }
  }
};

export const NoSizes: Story = {
  args: {
    image: {
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
  }
};

export const NoSizesNoAlt: Story = {
  args: {
    image: {
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
  }
};

export const NoAlt: Story = {
  args: {
    image: {
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
