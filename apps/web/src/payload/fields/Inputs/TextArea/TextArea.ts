import type { GroupField } from 'payload';

function TextArea({
  name,
  interfaceName,
  fields = []
}: Partial<GroupField> = {}): GroupField {
  return {
    name: name || 'textArea',
    type: 'group',
    interfaceName: interfaceName || 'TextAreaType',
    fields: [
      {
        label: 'Input Settings',
        type: 'collapsible',
        admin: {
          initCollapsed: true
        },
        fields: [
          {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: false,
            admin: {
              description:
                'The unique name that serves as the ID for the input.'
            }
          },
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
          {
            name: 'required',
            label: 'Required',
            type: 'checkbox',
            defaultValue: false,
            required: false
          },
          ...fields
        ]
      }
    ]
  };
}

export default TextArea;
