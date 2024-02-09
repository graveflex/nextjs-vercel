import type { GroupField } from 'payload/types';

export const themeOptions = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
  { label: 'Unicorn', value: 'unicorn' },
  { label: 'Machete', value: 'machete' },
  { label: 'Supreme', value: 'supreme' }
];

function BlockConfig({
  name,
  label,
  fields = []
}: Partial<GroupField> = {}): GroupField {
  return {
    name: name || 'blockConfig',
    label: label || 'Block Configuration',
    type: 'group',
    fields: [
      {
        name: 'theme',
        label: 'Theme',
        type: 'select',
        required: false,
        options: themeOptions
      },
      {
        name: 'hidden',
        label: 'Hide Block',
        admin: {
          description: 'Block will not appear on page'
        },
        type: 'checkbox',
        defaultValue: false
      },
      ...fields
    ]
  };
}

export default BlockConfig;
