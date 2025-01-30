import type { Meta, StoryObj } from '@storybook/react';

import type { RichTextType } from '.';
import RichText from '.';
import richTextMockData, { payloadTypography } from './richTextMockData';

const meta: Meta<RichTextType> = {
  title: 'ui/RichText',
  component: RichText,
  decorators: [
    (Story) => (
      <div className="bg-gray-400 p-16">
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<RichTextType>;

export const Defaults: Story = {
  args: richTextMockData
};

export const PayloadTypography: Story = {
  args: payloadTypography
};
