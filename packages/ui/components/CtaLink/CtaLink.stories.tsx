import type { Meta, StoryObj } from '@storybook/react';

import type { CtaLinkType } from '.';
import CtaLink from '.';

const meta: Meta<CtaLinkType> = {
  title: 'ui/CtaLink',
  component: CtaLink,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Defaults: Story = {
  args: {
    link: {
      type: 'external',
      externalHref: '/',
      label: 'Click me',
      icon: { name: 'ArrowRight', color: 'currentColor' }
    }
  }
};
