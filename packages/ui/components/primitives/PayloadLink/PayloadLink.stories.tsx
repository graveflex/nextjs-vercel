import type { Meta, StoryObj } from '@storybook/react';

import type { PayloadLinkProps as PayloadLinkType } from '.';
import PayloadLink from '.';

const meta: Meta<PayloadLinkType> = {
  title: 'ui/PayloadLink',
  component: PayloadLink,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<PayloadLinkType>;

export const Defaults: Story = {
  args: {
    href: '/',
    text: 'This is a link',
    scroll: true,
    newTab: false
  }
};
