import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import type { Block } from 'payload';

const FAQBlock: Block = {
  slug: 'faqBlock',
  interfaceName: 'FAQBlockT',
  fields: [
    BlockConfig(),
    {
      type: 'richText',
      name: 'header',
      localized: true,
      label: 'Header',
      required: false,
      admin: {
        description: 'Header & subtitle content for FAQ Block.'
      }
    },
    {
      type: 'select',
      name: 'textAlignment',
      label: 'Text Alignment',
      defaultValue: 'left',
      options: [
        {
          label: 'Left',
          value: 'left'
        },
        {
          label: 'Center',
          value: 'center'
        },
        {
          label: 'Right',
          value: 'right'
        }
      ],
      admin: {
        description: 'The alignment of the Header text'
      }
    },
    {
      type: 'array',
      name: 'items',
      label: 'List of Accordion Items',
      localized: true,
      labels: {
        singular: 'Accordion Item',
        plural: 'Accordion Items'
      },
      fields: [
        {
          type: 'text',
          name: 'title',
          label: 'Title',
          required: false,
          admin: {
            description:
              'The text that will be displayed in the accordion item.'
          }
        },
        {
          type: 'richText',
          name: 'content',
          label: 'Content',
          required: false,
          admin: {
            description:
              'The content that will be displayed when the accordion item is expanded.'
          }
        }
      ]
    }
  ]
};

export default FAQBlock;
