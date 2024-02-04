import type { Meta, StoryObj } from '@storybook/react';

import type { RichTextType } from '.';
import RichText from '.';

const meta: Meta<RichTextType> = {
  title: 'web/RichText',
  component: RichText,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<RichTextType>;

export const Defaults: Story = {
  args: {
    content: [
      {
        children: [
          {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
        ]
      },
      {
        children: [
          {
            text: ''
          }
        ]
      },
      {
        type: 'h1',
        children: [
          {
            text: 'H1'
          }
        ]
      },
      {
        type: 'h2',
        children: [
          {
            text: 'h2'
          }
        ]
      },
      {
        type: 'h3',
        children: [
          {
            text: 'h3'
          }
        ]
      },
      {
        type: 'h4',
        children: [
          {
            text: 'h4'
          }
        ]
      },
      {
        type: 'h5',
        children: [
          {
            text: 'h5'
          }
        ]
      },
      {
        type: 'h6',
        children: [
          {
            text: 'h6'
          }
        ]
      },
      {
        type: 'ul',
        children: [
          {
            type: 'li',
            children: [
              {
                text: 'ul 1'
              }
            ]
          },
          {
            type: 'li',
            children: [
              {
                text: 'ul 2'
              }
            ]
          },
          {
            type: 'li',
            children: [
              {
                text: 'ul 3'
              }
            ]
          }
        ]
      },
      {
        type: 'blockquote',
        children: [
          {
            text: 'blockquote'
          }
        ]
      },
      {
        type: 'ol',
        children: [
          {
            type: 'li',
            children: [
              {
                text: 'ol 1'
              }
            ]
          },
          {
            type: 'li',
            children: [
              {
                text: 'ol 2'
              }
            ]
          },
          {
            type: 'li',
            children: [
              {
                text: 'ol 3'
              }
            ]
          }
        ]
      },
      {
        type: 'indent',
        children: [
          {
            type: 'indent',
            children: [
              {
                type: 'indent',
                children: [
                  {
                    type: 'indent',
                    children: [
                      {
                        type: 'indent',
                        children: [
                          {
                            children: [
                              {
                                text: 'tabbed in?'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        children: [
          {
            text: 'back to the beginning'
          }
        ]
      },
      {
        children: [
          {
            bold: true,
            text: 'bold text'
          }
        ]
      },
      {
        children: [
          {
            text: 'italicized text',
            italic: true
          }
        ]
      },
      {
        children: [
          {
            text: 'underlined text',
            underline: true
          }
        ]
      },
      {
        children: [
          {
            text: 'crossed out text',
            strikethrough: true
          }
        ]
      },
      {
        children: [
          {
            code: true,
            text: 'code text'
          }
        ]
      },
      {
        children: [
          {
            code: true,
            text: 'more code'
          }
        ]
      },
      {
        children: [
          {
            text: ''
          },
          {
            url: 'https://google.com',
            type: 'link',
            newTab: true,
            children: [
              {
                text: 'Link to google'
              }
            ],
            linkType: 'custom'
          },
          {
            text: ''
          }
        ]
      }
    ]
  }
};

export const NoChildren: Story = {
  args: {
    content: [
      {
        children: []
      }
    ]
  }
};
