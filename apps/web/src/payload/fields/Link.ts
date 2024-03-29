import type { GroupField } from 'payload/types';

function Link({
  name,
  interfaceName,
  fields = []
}: Partial<GroupField> = {}): GroupField {
  return {
    name: name || 'link',
    type: 'group',
    interfaceName: interfaceName || 'payLoadLink',
    fields: [
      {
        name: 'href',
        label: 'Link',
        type: 'text',
        required: false
      },
      {
        name: 'text',
        label: 'Text',
        type: 'text',
        required: true
      },
      {
        name: 'newTab',
        label: 'Open in new tab',
        type: 'checkbox',
        required: false
      },
      {
        name: 'style',
        label: 'Style',
        type: 'select',
        options: [
          {
            label: 'Button',
            value: 'button'
          },
          {
            label: 'Link',
            value: 'link'
          }
        ]
      },
      {
        name: 'buttonStyle',
        label: 'Button Style',
        type: 'relationship',
        relationTo: 'button',
        hasMany: false,
        required: false
      },

      ...fields
    ]
  };
}

export default Link;
