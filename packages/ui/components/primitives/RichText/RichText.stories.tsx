import type { PayloadRichTextProps } from '@mono/ui/primitives/PayloadRichText';
import type { Meta, StoryObj } from '@storybook/react';

import RichText from '.';

const meta: Meta<PayloadRichTextProps> = {
  title: 'ui/RichText',
  component: RichText,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<unknown>;

export const Defaults: Story = {
  args: {
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
          },
          {
            tag: 'h1',
            type: 'heading',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'Heading 1',
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1
              }
            ],
            direction: 'ltr'
          },
          {
            tag: 'h2',
            type: 'heading',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'Heading 2',
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1
              }
            ],
            direction: 'ltr'
          },
          {
            tag: 'h3',
            type: 'heading',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'Heading 3',
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1
              }
            ],
            direction: 'ltr'
          },
          {
            tag: 'h4',
            type: 'heading',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'Heading 4',
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1
              }
            ],
            direction: 'ltr'
          },
          {
            tag: 'h5',
            type: 'heading',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'Heading 5',
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1
              }
            ],
            direction: 'ltr'
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: null
          },
          {
            tag: 'ul',
            type: 'list',
            start: 1,
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                type: 'listitem',
                value: 1,
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: 'Unordered',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1
                  }
                ],
                direction: 'ltr'
              },
              {
                type: 'listitem',
                value: 2,
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: 'List',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1
                  }
                ],
                direction: 'ltr'
              },
              {
                type: 'listitem',
                value: 3,
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: 'List',
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
            listType: 'bullet',
            direction: 'ltr'
          },
          {
            tag: 'ol',
            type: 'list',
            start: 1,
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                type: 'listitem',
                value: 1,
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: 'Ordered List',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1
                  }
                ],
                direction: 'ltr'
              },
              {
                type: 'listitem',
                value: 2,
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: 'Here',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1
                  }
                ],
                direction: 'ltr'
              },
              {
                type: 'listitem',
                value: 3,
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: 'List',
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
            listType: 'number',
            direction: 'ltr'
          },
          {
            tag: 'ul',
            type: 'list',
            start: 1,
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                type: 'listitem',
                value: 1,
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: 'A checkbox ',
                    type: 'text',
                    style: '',
                    detail: 0,
                    format: 0,
                    version: 1
                  }
                ],
                direction: 'ltr'
              },
              {
                type: 'listitem',
                value: 2,
                format: '',
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: 'normal',
                    text: ' Another checkbox',
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
            listType: 'check',
            direction: 'ltr'
          },
          {
            type: 'quote',
            format: '',
            indent: 0,
            version: 1,
            children: [
              {
                mode: 'normal',
                text: 'Blocked quoted',
                type: 'text',
                style: '',
                detail: 0,
                format: 0,
                version: 1
              }
            ],
            direction: 'ltr'
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: null
          },
          {
            type: 'paragraph',
            format: '',
            indent: 0,
            version: 1,
            children: [],
            direction: 'ltr'
          }
        ],
        direction: 'ltr'
      }
    }
  }
};
