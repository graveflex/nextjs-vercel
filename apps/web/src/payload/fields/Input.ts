import type { GroupField } from 'payload/types';

function Input({
  name,
  interfaceName,
  fields = []
}: Partial<GroupField> = {}): GroupField {
  return {
    name: 'input',
    type: 'group',
    interfaceName: interfaceName || 'InputType',
    fields: [
      {
        name: 'type',
        label: 'Field Type',
        type: 'select',
        defaultValue: 'input',
        required: false,
        options: [
          {
            label: 'Text Input',
            value: 'input'
          },
          {
            label: 'Select',
            value: 'select'
          },
          {
            label: 'Radio',
            value: 'radio'
          },
          {
            label: 'Checkbox',
            value: 'checkbox'
          }
        ]
      },
      {
        name: 'name',
        label: 'Name',
        type: 'text',
        required: true
      },
      {
        name: 'label',
        label: 'Label',
        type: 'text',
        defaultValue: 'Label',
        required: false
      },
      {
        name: 'placeholder',
        label: 'Placeholder',
        type: 'text',
        defaultValue: 'Placeholder',
        required: false
      },
      {
        name: 'errorMessage',
        label: 'Error Message',
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
        name: 'required',
        label: 'Required',
        type: 'checkbox',
        defaultValue: false,
        required: true
      },
      {
        name: 'options',
        label: 'Options',
        type: 'array',
        required: false,
        minRows: 1,
        dbName: `${name}_input_field`,
        fields: [
          {
            name: 'label',
            label: 'Label',
            type: 'text',
            required: true
          },
          {
            name: 'value',
            label: 'Value',
            type: 'text',
            required: true
          },
          {
            name: 'name',
            label: 'Name',
            type: 'text',
            required: false
          },
          {
            name: 'id',
            label: 'ID',
            type: 'text',
            required: false
          }
        ],
        admin: {
          condition: (_, siblingData) => siblingData.type === 'select' || siblingData.type === 'radio'
        }
      },
      ...fields
    ]
  };
}

export default Input;
