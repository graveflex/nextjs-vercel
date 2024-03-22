/* eslint-disable @typescript-eslint/no-explicit-any */
import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';

import type { TextImageBlockType } from '.';
import TextImageBlock from '.';

const meta: Meta<TextImageBlockType> = {
  title: 'blocks/TextImageBlock',
  component: TextImageBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<TextImageBlockType>;

export const Defaults: Story = {
  args: {
    blockConfig: {
      layout: 'imgLeft'
    },
    title: 'TextImageBlock',
    content: [
      {
        children: [
          {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
        ]
      }
    ] as any,
    image: {
      id: 1,
      alt: 'Myopic Logo',
      updatedAt: '2024-01-05T20:29:44.749Z',
      createdAt: '2024-01-05T20:29:44.749Z',
      url: faker.image.abstract(1200),
      filename: 'Logo.svg',
      mimeType: 'image/svg+xml',
      filesize: 7144,
      width: 193,
      height: 17
    }
  }
};

export const RightSide: Story = {
  args: {
    ...Defaults.args,
    blockConfig: {
      layout: 'imgRight'
    }
  }
};

export const NoBlockConfig: Story = {
  args: {
    ...Defaults.args,
    blockConfig: {},
    cta: {
      label: 'Test label',
      href: '/'
    }
  }
};
