import type { Meta, StoryObj } from '@storybook/react';

import type { PaginationType } from '.';
import Pagination from '.';

const meta: Meta<PaginationType> = {
  title: 'ui/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<PaginationType>;

export const Defaults: Story = {
  args: {
    skip: 0,
    limit: 10,
    total: 100,
    range: 5
  }
};

export const BreakLabel: Story = {
  args: {
    skip: 0,
    limit: 5,
    total: 100,
    range: 5,
    showJump: false
  }
};

export const JumpArrows: Story = {
  args: {
    skip: 0,
    limit: 5,
    total: 100,
    range: 5,
    showJump: true
  }
};
