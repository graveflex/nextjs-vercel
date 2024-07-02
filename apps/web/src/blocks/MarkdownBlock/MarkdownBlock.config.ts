import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import RichTextFields from '@mono/web/payload/fields/RichTextFields';
import type { Block } from 'payload';

const MarkdownBlock: Block = {
  slug: 'markdownBlock',
  interfaceName: 'MarkdownBlockT',
  fields: [
    BlockConfig(),
    ...RichTextFields,
    {
      name: 'maxWidth',
      label: 'Max Width',
      required: false,
      type: 'select',
      localized: true,
      admin: {
        description: 'The maximum width of the content block.'
      },
      options: [
        {
          label: 'xxl',
          value: '1440px'
        },
        {
          label: 'xl',
          value: '1280px'
        },
        {
          label: 'lg',
          value: '992px'
        },
        {
          label: 'md',
          value: '768px'
        },
        {
          label: 'sm',
          value: '576px'
        },
        {
          label: 'xs',
          value: '320px'
        },
        {
          label: 'unset',
          value: 'unset'
        }
      ]
    }
  ]
};

export default MarkdownBlock;
