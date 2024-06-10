import { faker } from '@faker-js/faker';
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
                    text: faker.lorem.paragraphs(15),
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
        }
      },
      {
        text: faker.lorem.words(2),
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
                    text: faker.lorem.paragraphs(15),
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
        }
      },
      {
        text: faker.lorem.words(15),
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
                    text: faker.lorem.paragraphs(15),
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
        }
      }
    ]
  }
};
