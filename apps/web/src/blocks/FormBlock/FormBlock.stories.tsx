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
          blockType: 'textInput',
          textinput: {
            name: 'Name',
            placeholder: 'Enter your name',
            helpText: null,
            label: 'Name',
            required: true
          }
        },
        {
          id: '1',
          blockName: null,
          blockType: 'textInput',
          textinput: {
            name: 'Email',
            placeholder: 'Enter your email',
            helpText: null,
            label: 'Email',
            required: true
          }
        },
        {
          id: '2',
          name: 'message',
          placeholder: 'Enter a message',
          helpText: null,
          label: "Anything else you'd like to know?",
          required: true,
          blockName: null,
          blockType: 'textArea'
        },
        {
          id: '3',
          blockName: null,
          blockType: 'select',

          select: {
            name: 'select',
            placeholder: null,
            helpText: null,
            label: 'Select',
            required: false,

            selectOptions: [
              {
                option: 'Select 1',
                id: '0'
              },

              {
                option: 'Select 2',
                id: '1'
              }
            ]
          }
        }
      ],
      submitButtonLabel: 'Send!',
      confirmationType: 'message',
      updatedAt: '2024-06-28T16:55:19.295Z',
      createdAt: '2024-06-28T16:54:08.622Z'
    }
  }
};
