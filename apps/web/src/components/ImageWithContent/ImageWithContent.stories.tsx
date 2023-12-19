import type { Meta, StoryObj } from '@storybook/react';

import type { ImageWithContentType } from '.';
import ImageWithContent from '.';

const meta: Meta<ImageWithContentType> = {
  title: 'web/ImageWithContent',
  component: ImageWithContent,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<ImageWithContentType>;

export const Defaults: Story = {
  args: {
    title: "I'm a title",
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    direction: 'left'
  }
};
