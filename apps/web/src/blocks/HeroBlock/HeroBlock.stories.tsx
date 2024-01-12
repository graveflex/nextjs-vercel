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
    title: 'Hero block',
    subTitle: 'subTitle',
    cta: {
      href: 'https://google.com',
      label: 'Test'
    },
    background: {
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
