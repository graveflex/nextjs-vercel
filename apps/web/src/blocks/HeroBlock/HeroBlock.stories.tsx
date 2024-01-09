import type { Meta, StoryObj } from '@storybook/react';

import type { HeroBlock as HeroBlockType } from '@web/payload/payload-types';

import HeroBlock from '.';

const meta: Meta<HeroBlockType> = {
  title: 'web/HeroBlock',
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
    header: "I'm a header",
    subHeader: "I'm a subheader",
    cta: "I'm a CTA",
    image: {
      url: 'https://images.unsplash.com/photo-1682685797088-283404e24b9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D',
      id: 1,
      createdAt: '',
      updatedAt: '',
      alt: 'banner-image'
    }
  }
};
