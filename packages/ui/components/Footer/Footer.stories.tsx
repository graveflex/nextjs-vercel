import genRichText from '@mono/ui/utils/genRichText';
import type { Meta, StoryObj } from '@storybook/react';

import type { FooterType } from '.';
import Footer from '.';

const meta: Meta<FooterType> = {
  title: 'ui/Footer',
  component: Footer,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<FooterType>;

export const Defaults: Story = {
  args: {
    copyright: genRichText([{ type: 'paragraph', text: '© 2021 Mono, Inc.' }]),
    footerMenu: [
      {
        id: '1',
        link: {
          type: 'external',
          label: 'Privacy Policy',
          externalHref: 'https://www.google.com'
        }
      },
      {
        id: '2',
        link: {
          type: 'external',
          externalHref: 'https://www.google.com',
          label: 'Terms of Service'
        }
      }
    ]
  }
};
