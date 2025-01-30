import type { Meta, StoryObj } from '@storybook/react';

import type { RichTextType } from '.';
import RichText from '.';

const meta: Meta<RichTextType> = {
  title: 'ui/RichText',
  component: RichText,
  decorators: [
    (Story) => (
      <div className="bg-gray-400 p-16">
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<RichTextType>;

export const richTextMockData: RichTextType = {
  data: {
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
              text: 'This is regular text.',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1
            }
          ],
          direction: 'ltr',
          textStyle: '',
          textFormat: 0
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
          tag: 'h6',
          type: 'heading',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'Heading 6',
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
          direction: 'ltr',
          textStyle: '',
          textFormat: 0
        },
        {
          type: 'horizontalrule',
          version: 1
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
                  text: 'An ordered',
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
                  text: 'list to ',
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
                  text: 'test the numbering',
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
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [],
          direction: 'ltr',
          textStyle: '',
          textFormat: 0
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
                  text: 'An unordered list',
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
                  text: 'to test the',
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
                  text: 'bullet pointing',
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
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'This is normal text with a few formatting options, like ',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1
            },
            {
              mode: 'normal',
              text: 'bolding',
              type: 'text',
              style: '',
              detail: 0,
              format: 1,
              version: 1
            },
            {
              mode: 'normal',
              text: ', ',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1
            },
            {
              mode: 'normal',
              text: 'italicizing',
              type: 'text',
              style: '',
              detail: 0,
              format: 2,
              version: 1
            },
            {
              mode: 'normal',
              text: ', ',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1
            },
            {
              mode: 'normal',
              text: 'underlining',
              type: 'text',
              style: '',
              detail: 0,
              format: 8,
              version: 1
            },
            {
              mode: 'normal',
              text: ', and ',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1
            },
            {
              mode: 'normal',
              text: 'striking thru',
              type: 'text',
              style: '',
              detail: 0,
              format: 4,
              version: 1
            },
            {
              mode: 'normal',
              text: '.',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1
            }
          ],
          direction: 'ltr',
          textStyle: '',
          textFormat: 0
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'This is a ',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1
            },
            {
              id: '67994e827e74671eb084e621',
              type: 'link',
              fields: {
                type: 'external',
                externalUrl: 'https://www.google.com'
              },
              format: '',
              indent: 0,
              version: 3,
              children: [
                {
                  mode: 'normal',
                  text: 'link',
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
              mode: 'normal',
              text: '.',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1
            }
          ],
          direction: 'ltr',
          textStyle: '',
          textFormat: 0
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [],
          direction: null,
          textStyle: '',
          textFormat: 0
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: '{ This is a code block };',
              type: 'text',
              style: '',
              detail: 0,
              format: 16,
              version: 1
            }
          ],
          direction: 'ltr',
          textStyle: '',
          textFormat: 16
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [],
          direction: 'ltr',
          textStyle: '',
          textFormat: 16
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'This is ',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1
            },
            {
              mode: 'normal',
              text: 'subscript',
              type: 'text',
              style: '',
              detail: 0,
              format: 32,
              version: 1
            }
          ],
          direction: 'ltr',
          textStyle: '',
          textFormat: 0
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              mode: 'normal',
              text: 'And this is ',
              type: 'text',
              style: '',
              detail: 0,
              format: 0,
              version: 1
            },
            {
              mode: 'normal',
              text: 'superscript',
              type: 'text',
              style: '',
              detail: 0,
              format: 64,
              version: 1
            }
          ],
          direction: 'ltr',
          textStyle: '',
          textFormat: 0
        }
      ],
      direction: 'ltr'
    }
  }
};

export const Defaults: Story = {
  args: richTextMockData
};
