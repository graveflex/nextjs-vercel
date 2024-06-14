import { faker } from '@faker-js/faker';
import genRichText from '@mono/ui/utils/genRichText';
import type { Meta, StoryObj } from '@storybook/react';

import type { AccordionProps } from '.';
import Accordion from '.';

const meta: Meta<AccordionProps> = {
  title: 'ui/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<AccordionProps>;

export const Defaults: Story = {
  args: {
    title: faker.lorem.words(3),
    items: [
      {
        text: faker.lorem.words(5),
        content: {
          ...genRichText([
            { type: 'paragraph', text: faker.lorem.paragraph(15) }
          ])
        }
      },
      {
        text: faker.lorem.words(2),
        content: {
          ...genRichText([
            { type: 'paragraph', text: faker.lorem.paragraph(15) }
          ])
        }
      },
      {
        text: faker.lorem.words(15),
        content: {
          ...genRichText([
            { type: 'paragraph', text: faker.lorem.paragraph(15) }
          ])
        }
      }
    ]
  }
};
