import type { GroupField } from 'payload/types';

const themeOptions = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' }
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
      ...fields
    ]
  };
}

export default BlockConfig;
