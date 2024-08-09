import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import type { ModalType } from '.';
import Modal from '.';

const meta: Meta<ModalType> = {
  title: 'ui/Modal',
  component: Modal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<ModalType>;

export const Defaults: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    children: (
      <>
        <h1>Modal Content</h1>
        <p>This is the content of the modal</p>
      </>
    )
  }
};
