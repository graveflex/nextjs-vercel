import type { Meta, StoryObj } from '@storybook/react';

import { Separator } from '@mono/web/components/ui/Separator';

/**
 * Visually or semantically separates content.
 */
const meta = {
  title: 'ui/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * A separator between horizontal items.
 */
export const Horizontal: Story = {
  render: () => (
    <div className="flex gap-2">
      <div>Left</div>
      <Separator orientation="vertical" className="h-auto" />
      <div>Right</div>
    </div>
  )
};

/**
 * A separator between vertical items.
 */
export const Vertical: Story = {
  render: () => (
    <div className="grid gap-2">
      <div>Top</div>
      <Separator orientation="horizontal" />
      <div>Bottom</div>
    </div>
  )
};
