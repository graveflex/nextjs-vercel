import type { Meta, StoryObj } from '@storybook/react';

import type { MenuLinksType } from '.';
import MenuLinks from '.';

const meta: Meta<MenuLinksType> = {
  title: 'web/MenuLinks',
  component: MenuLinks,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<MenuLinksType>;

export const Defaults: Story = {
  args: {
    placeholder: 'Enter text here'
  }
};
