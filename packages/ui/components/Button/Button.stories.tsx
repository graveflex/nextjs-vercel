import type { Meta, StoryObj } from '@storybook/react';

import type { ButtonProps } from '.';
import Button from '.';

const meta: Meta<ButtonProps> = {
  title: 'ui/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Defaults: Story = {
  args: {
    children: 'Call to Action',
    $variant: 'solid',
    $color: 'secondary',
    type: 'button'
  }
};

export const Outline: Story = {
  args: {
    children: 'Call to Action',
    $variant: 'outline',
    $color: 'secondary',
    type: 'button'
  }
};

export const Link: Story = {
  args: {
    children: 'Call to Action',
    $variant: 'link',
    $color: 'secondary',
    type: 'button'
  }
};

export const SolidIcon: Story = {
  args: {
    children: 'Call to Action',
    $variant: 'solid',
    icon: { name: 'ArrowRight', color: 'currentColor' },
    $color: 'secondary',
    type: 'button'
  }
};

export const OutlineIcon: Story = {
  args: {
    children: 'Call to Action',
    $variant: 'outline',
    icon: { name: 'ArrowRight', color: 'currentColor' },
    $color: 'secondary',
    type: 'button'
  }
};

export const LinkIcon: Story = {
  args: {
    children: 'Call to Action',
    $variant: 'link',
    icon: { name: 'ArrowRight', color: 'currentColor' },
    $color: 'secondary',
    type: 'button'
  }
};

export const SolidIconOnly: Story = {
  args: {
    $variant: 'solid',
    icon: { name: 'ArrowRight', color: 'currentColor' },
    $color: 'secondary',
    type: 'button'
  }
};

export const OutlineIconOnly: Story = {
  args: {
    $variant: 'outline',
    icon: { name: 'ArrowRight', color: 'currentColor' },
    $color: 'secondary',
    type: 'button'
  }
};
