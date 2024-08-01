import { faker } from '@faker-js/faker';
import genRichText from '@mono/ui/utils/genRichText';
import type { Meta, StoryObj } from '@storybook/react';

import type { FormBlockProps } from '.';
import FormBlock from '.';

const meta: Meta<FormBlockProps> = {
  title: 'blocks/FormBlock',
  component: FormBlock,
  parameters: {
    layout: 'fullScreen'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<FormBlockProps>;

export const Defaults: Story = {
  parameters: {
    nextjs: {
      appDirectory: true
    }
  },
  args: {
    content: {
      ...genRichText([
        {
          type: 'heading',
          tag: 'h1',
          text: faker.lorem.words(2),
          format: 'center'
        }
      ])
    },
    form: {
      id: 1,
      title: 'Contact Form',
      fields: [
        {
          id: '0',
          blockName: null,
          blockType: 'text',
          name: 'Name',
          defaultValue: 'Enter your name',
          label: 'Name',
          required: true
        },
        {
          id: '1',
          blockName: null,
          blockType: 'text',
          name: 'Email',
          defaultValue: 'Enter your email',
          label: 'Email',
          required: true
        },
        {
          id: '2',
          name: 'message',
          defaultValue: 'Enter a message',
          label: "Anything else you'd like to know?",
          required: true,
          blockName: null,
          blockType: 'textarea'
        },
        {
          id: '3',
          blockName: null,
          blockType: 'select',

          name: 'select',
          defaultValue: null,

          label: 'Select',
          required: false,

          options: [
            {
              label: 'Select 1',
              value: '0',
              id: '0'
            },
            {
              label: 'Select 2',
              value: '1',
              id: '1'
            }
          ]
        }
      ],
      submitButtonLabel: 'Send!',
      confirmationType: 'message',
      updatedAt: '2024-06-28T16:55:19.295Z',
      createdAt: '2024-06-28T16:54:08.622Z'
    }
  }
};
