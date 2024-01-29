import type { GroupField } from 'payload/types';

// NOTE: setting up just the text input for now

function Input({
  name,
  interfaceName,
  fields = []
}: Partial<GroupField> = {}): GroupField {
  return {
    name: name || 'input',
    type: 'group',
    interfaceName: interfaceName || 'InputType',
    fields: [
      {
        name: 'placeholder',
        label: 'Placeholder',
        type: 'text',
        defaultValue: 'Placeholder',
        required: false
      },
      {
        name: 'type',
        label: 'Input Type',
        type: 'select',
        defaultValue: 'text',
        required: false,
        options: [
          {
            label: 'Text Input',
            value: 'text'
          }
        ]
      },
      ...fields
    ]
  };
}

export default Input;
