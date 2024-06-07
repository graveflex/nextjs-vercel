import type { GroupField } from 'payload/types';

import IconSelect from './IconSelect';

function Link({
  name,
  interfaceName,
  localized,
  fields = []
}: Partial<GroupField> = {}): GroupField {
  return {
    name: name || 'link',
    type: 'group',
    interfaceName: interfaceName || 'payLoadLink',
    fields: [
      {
        name: 'type',
        label: 'Type of Link',
        type: 'select',
        dbName: `${name?.toLowerCase()}_cta_t`,
        options: [
          {
            label: 'Internal',
            value: 'internal'
          },
          {
            label: 'External',
            value: 'external'
          },
          {
            label: 'Email',
            value: 'email'
          },
          {
            label: 'Phone',
            value: 'phone'
          },
          {
            label: 'File',
            value: 'file'
          }
        ],
        defaultValue: 'internal'
      },
      {
        name: 'label',
        label: 'Link Label',
        type: 'text',
        localized,
        required: true
      },
      {
        name: 'internalHref',
        label: 'Internal URL',
        type: 'relationship',
        relationTo: 'pages',
        admin: {
          condition: (_, siblingData) => siblingData.type === 'internal',
          description: 'Route for link'
        }
      },
      {
        name: 'externalHref',
        label: 'External URL',
        type: 'text',
        admin: {
          condition: (_, siblingData) => siblingData.type === 'external',
          description: 'Route for link'
        }
      },
      {
        name: 'emailHref',
        label: 'Email Address',
        type: 'text',
        admin: {
          condition: (_, siblingData) => siblingData.type === 'email',
          description:
            'will open the default email client with this email address as the recipient'
        }
      },
      {
        name: 'phoneHref',
        label: 'Phone Number',
        type: 'text',
        admin: {
          condition: (_, siblingData) => siblingData.type === 'phone',
          description: 'Do no include spaces or special characters'
        }
      },
      {
        name: 'fileHref',
        label: 'File',
        type: 'upload',
        relationTo: 'files',
        admin: {
          condition: (_, siblingData) => siblingData.type === 'file'
        }
      },
      {
        name: 'newTab',
        label: 'Open in new tab',
        type: 'checkbox',
        required: false
      },
      IconSelect({ name: `${name}_link` }),
      ...fields
    ]
  };
}

export default Link;
