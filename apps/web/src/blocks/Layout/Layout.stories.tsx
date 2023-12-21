import type { Meta, StoryObj } from '@storybook/react';

import { Layout as LayoutType } from '@web/payload/payload-types';

import Layout from '.';

const meta: Meta<LayoutType> = {
  title: 'web/Layout',
  component: Layout,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<LayoutType>;

export const Defaults: Story = {
  args: {
    footerItems: [
      {
        title: 'Footer link',
        url: '/'
      }
    ],
    headerItems: [
      { title: 'Menu', url: '/', type: 'link' },
      { title: 'CTA', url: '/', type: 'button' }
    ],
    logo: {
      id: 1,
      url: 'https://images.unsplash.com/photo-1703081397398-6156621d25ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8',
      createdAt: Date.now.toString(),
      updatedAt: Date.now.toString()
    }
  }
};
