import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';

import type { FullBleedImageBlockType } from '.';
import FullBleedImageBlock from '.';

const meta: Meta<FullBleedImageBlockType> = {
  title: 'blocks/FullBleedImageBlock',
  component: FullBleedImageBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<FullBleedImageBlockType>;

const image = {
  id: 1,
  alt: 'placeholder',
  updatedAt: '2024-01-05T20:29:44.749Z',
  createdAt: '2024-01-05T20:29:44.749Z',
  url: faker.image.urlPicsumPhotos(),
  filename: 'Logo.svg',
  mimeType: 'image/svg+xml',
  filesize: 7144,
  width: 296,
  height: 296,
  imageProps: {
    fill: false
  }
};

export const Defaults: Story = {
  args: {
    image,
    isBackground: false
  }
};
