import { faker } from '@faker-js/faker';
import genRichText from '@mono/ui/utils/genRichText';
import type { Meta, StoryObj } from '@storybook/react';

import type { MarkdownBlockType } from '.';
import MarkdownBlock from '.';

const meta: Meta<MarkdownBlockType> = {
  title: 'blocks/MarkdownBlock',
  component: MarkdownBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<MarkdownBlockType>;

export const Defaults: Story = {
  args: {
    content: {
      ...genRichText([
        { type: 'heading', tag: 'h1', text: faker.lorem.words(2) },
        { type: 'paragraph', text: faker.lorem.paragraph(3) },
        {
          type: 'upload',

          value: {
            id: 1,
            alt: null,

            updatedAt: '2024-01-05T20:29:44.749Z',
            createdAt: '2024-01-05T20:29:44.749Z',
            url: faker.image.url({ width: 650, height: 650 }),
            filename: 'Logo.svg',
            mimeType: 'image/svg+xml',
            filesize: 7144,
            width: 650,
            height: 650,

            additionalProps: {
              objectFit: 'fill',
              isRounded: false,
              aspectRatio: '1/1'
            },
            sizes: {}
          }
        }
      ])
    },
    maxWidth: '768px'
  }
};
