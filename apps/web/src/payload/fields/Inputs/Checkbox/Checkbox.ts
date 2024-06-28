import type { GroupField } from 'payload/types';

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
            label: 'Name',
            type: 'text',
            required: false
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
                name: 'option',
                label: 'Option',
                type: 'text',
                required: false
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
