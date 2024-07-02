import type { Field } from 'payload';

const RichTextFields: Array<Field> = [
  {
    label: 'RichText',
    type: 'collapsible',
    fields: [
      {
        type: 'richText',
        name: 'content',
        label: 'Content',
        required: false,
        localized: true,
        admin: {
          description:
            'The content that will be displayed in the markdown block.'
        }
      }
    ]
  }
];

export default RichTextFields;
