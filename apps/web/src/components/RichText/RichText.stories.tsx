import type { Meta, StoryObj } from '@storybook/react';

import type { PayloadRichTextT } from '@web/primitives/primatives';

import RichText from '.';

const meta: Meta<PayloadRichTextT> = {
  title: 'web/RichText',
  component: RichText,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<PayloadRichTextT>;

export const Defaults: Story = {};
