import type { Meta, StoryObj } from '@storybook/react';

import type { WrapperType } from '.';
import Wrapper from '.';

const meta: Meta<WrapperType> = {
  title: 'web/Wrapper',
  component: Wrapper,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<WrapperType>;

export const Defaults: Story = {
  args: {}
};

export const BlockConfig: Story = {
  args: {
    blockConfig: {
      responsiveStyles: {
        xs: { paddingTop: '60px' },
        sm: { paddingTop: undefined },
        md: { paddingTop: '0px', paddingBottom: '100px' }
      }
    }
  }
};
