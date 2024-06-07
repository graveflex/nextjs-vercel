import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import type { ErrorProps } from '.';
import Error from '.';

const meta: Meta<ErrorProps> = {
  title: 'ui/fields/Error',
  component: (props) => (
    <div style={{ position: 'relative', height: '100px', width: '360px' }}>
      <Error {...props} />
    </div>
  ),
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<ErrorProps>;

export const Defaults: Story = {
  args: {
    errorMessage: 'This is an error message',
    id: 'error'
  }
};
