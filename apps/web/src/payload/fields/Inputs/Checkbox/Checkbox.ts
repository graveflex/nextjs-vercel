import type { GroupField } from 'payload';

function Checkbox({
  name,
  interfaceName,
  fields = []
}: Partial<GroupField> = {}): GroupField {
  return {
    name: name || 'checkbox',
    type: 'group',
    interfaceName: interfaceName || 'CheckboxType',
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
            label: 'Name ID',
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
          {
            type: 'array',
            name: 'checkboxOptions',
            label: 'Options',
            required: false,
            localized: true,
            fields: [
              {
                name: 'label',
                label: 'Option Label',
                type: 'text',
                required: false
              },
              {
                name: 'value',
                label: 'Option Value',
                type: 'text',
                required: false,
                admin: {
                  description:
                    'A unique value to represent the data that is collected.'
                }
              }
            ]
          },
          ...fields
        ]
      }
    ]
  };
}

export default Checkbox;
