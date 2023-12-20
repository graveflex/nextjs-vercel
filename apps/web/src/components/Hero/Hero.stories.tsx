import type { Meta, StoryObj } from '@storybook/react';

import type { HeroType } from '.';
import Hero from '.';

const meta: Meta<HeroType> = {
  title: 'web/Hero',
  component: Hero,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<HeroType>;

export const Defaults: Story = {
  args: {
    header: "I'm a header",
    subHeader: "I'm a subheader",
    cta: "I'm a CTA",
    image: {
      url: '',
      id: 1,
      createdAt: '',
      updatedAt: '',
      alt: 'banner-image'
    }
  }
};
