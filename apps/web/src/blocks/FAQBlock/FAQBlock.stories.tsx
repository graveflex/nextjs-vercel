import { faker } from '@faker-js/faker';
import genRichText from '@mono/ui/utils/genRichText';
import type { Meta, StoryObj } from '@storybook/react';

import type { FAQBlockType } from '.';
import FAQBlock from '.';

const meta: Meta<FAQBlockType> = {
  title: 'blocks/FAQBlock',
  component: FAQBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<FAQBlockType>;

export const Defaults: Story = {
  args: {
    header: {
      ...genRichText([
        { type: 'heading', format: 'center', tag: 'h1', text: 'FAQ Block' },
        { type: 'paragraph', format: 'center', text: faker.lorem.paragraph(4) }
      ])
    },
    items: [
      {
        title: faker.lorem.words(5),
        content: {
          ...genRichText([
            { type: 'paragraph', text: faker.lorem.paragraph(15) }
          ])
        }
      },
      {
        title: faker.lorem.words(2),
        content: {
          ...genRichText([
            { type: 'paragraph', text: faker.lorem.paragraph(15) }
          ])
        }
      },
      {
        title: faker.lorem.words(15),
        content: {
          ...genRichText([
            { type: 'paragraph', text: faker.lorem.paragraph(15) }
          ])
        }
      }
    ]
  }
};
