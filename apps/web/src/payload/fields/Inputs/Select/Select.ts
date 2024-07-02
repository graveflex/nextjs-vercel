import type { GroupField } from 'payload';

function Select({
  name,
  interfaceName,
  fields = []
}: Partial<GroupField> = {}): GroupField {
  return {
    name: name || 'select',
    type: 'group',
    interfaceName: interfaceName || 'SelectType',
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
            name: 'selectOptions',
            label: 'Options',
            required: false,
            localized: true,
            fields: [
              {
                name: 'option',
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

export default Select;
