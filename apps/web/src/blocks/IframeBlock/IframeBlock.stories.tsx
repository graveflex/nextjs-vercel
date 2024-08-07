import genRichText from '@mono/ui/utils/genRichText';
import type { Meta, StoryObj } from '@storybook/react';

import type { IframeBlockType } from '.';
import IframeBlock from '.';

const meta: Meta<IframeBlockType> = {
  title: 'blocks/IframeBlock',
  component: IframeBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<IframeBlockType>;

export const Defaults: Story = {
  args: {
    iframe:
      'https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik',
    title: {
      ...genRichText([
        { type: 'heading', tag: 'h4', text: 'Headline for iFrame Block' }
      ])
    }
  }
};
