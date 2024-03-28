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
    content: {
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,
        children: [
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'Regular paragraph',
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1
              }
            ],
            direction: 'ltr'
          }
        ],
        direction: 'ltr'
      }
    },
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
