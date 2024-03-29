import type { GroupField } from 'payload/types';

function Button({
  name,
  interfaceName,
  fields = []
}: Partial<GroupField> = {}): GroupField {
  return {
    name: name || 'button',
    type: 'group',
    interfaceName: interfaceName || 'payloadButton',
    fields: [
      {
        name: 'color',
        label: 'Color',
        type: 'select',
        defaultValue: 'primary',
        options: [
          {
            label: 'Primary',
            value: 'primary'
          },
          {
            label: 'Secondary',
            value: 'secondary'
          },
          {
            label: 'FG',
            value: 'fg'
          },
          {
            label: 'BG',
            value: 'bg'
          }
        ]
      },
      {
        name: 'size',
        label: 'Size',
        type: 'select',
        options: [
          {
            label: 'Small',
            value: 'sm'
          },
          {
            label: 'Medium',
            value: 'md'
          },
          {
            label: 'Large',
            value: 'lg'
          }
        ]
      },
      {
        name: 'type',
        label: 'Type',
        type: 'select',
        options: [
          {
            label: 'Button',
            value: 'button'
          },
          {
            label: 'Reset',
            value: 'reset'
          },
          {
            label: 'Submit',
            value: 'submit'
          }
        ]
      },
      {
        name: 'variant',
        label: 'Variant',
        type: 'select',
        options: [
          {
            label: 'Solid',
            value: 'solid'
          },
          {
            label: 'Outlined',
            value: 'outlined'
          },
          {
            label: 'Link',
            value: 'link'
          }
        ]
      },

      ...fields
    ]
  };
}

export default Button;
