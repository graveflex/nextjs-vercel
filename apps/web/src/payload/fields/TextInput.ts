import type { GroupField } from 'payload/types';

function TextInput({
  name,
  interfaceName,
  fields = []
}: Partial<GroupField> = {}): GroupField {
  return {
    name: name || 'textinput',
    type: 'group',
    interfaceName: interfaceName || 'TextInputType',
    fields: [
      {
        name: 'placeholder',
        label: 'Placeholder',
        type: 'text',
        required: false
      },
      {
        name: 'helpText',
        label: 'Help Text',
        type: 'text',
        required: false
      },
      {
        name: 'label',
        label: 'Label',
        type: 'text',
        required: false
      },
      ...fields
    ]
  };
}

export default TextInput;
