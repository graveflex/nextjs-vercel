import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';

import type { GalleryGridBlockType } from '.';
import GalleryGridBlock from '.';

const meta: Meta<GalleryGridBlockType> = {
  title: 'blocks/GalleryGridBlock',
  component: GalleryGridBlock,
  parameters: {
    layout: 'fullScreen'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<GalleryGridBlockType>;

const ids = ['1', '2', '3', '4', '5', '6', '7', '8'];

const images = ids.map((id) => ({
  id,
  image: {
    id: Number(id),
    alt: 'Myopic Logo',
    updatedAt: '2024-01-05T20:29:44.749Z',
    createdAt: '2024-01-05T20:29:44.749Z',
    url: faker.image.urlPicsumPhotos(),
    filename: 'Logo.svg',
    mimeType: 'image/svg+xml',
    filesize: 7144,
    width: 296,
    height: 296
  }
}));

export const Defaults: Story = {
  args: {
    galleryImages: [...images]
  }
};

export const CTA: Story = {
  args: {
    galleryImages: [...images],
    cta: {
      link: {
        label: 'Sign up for now!'
      }
    }
  }
};
