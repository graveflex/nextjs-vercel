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
    label: 'Modal',
    headline: 'Headline',
    content: 'Content',
    footer: 'Footer'
  }
};
