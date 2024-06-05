import type { GroupField } from 'payload/types';

import IconSelect from './IconSelect';

function CTA({
  name,
  interfaceName,
  localized,
  defaultVariant,
  fields = []
}: Partial<GroupField> & { defaultVariant?: string } = {}): GroupField {
  return {
    name: 'cta',
    type: 'group',
    interfaceName: interfaceName || 'CTAType',
    fields: [
      {
        label: 'CTA Settings',
        type: 'collapsible',
        admin: {
          initCollapsed: true
        },
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
            label: 'Label',
            type: 'text',
            localized,
            required: false,
            defaultValue: 'Call to Action',
            admin: {
              description: 'Text for button'
            }
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
            name: 'newTab',
            label: 'Open in new tab',
            type: 'checkbox',
            required: false
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
            name: 'variant',
            label: 'Variant',
            type: 'select',
            defaultValue: defaultVariant || 'rounded-outline',
            dbName: `${name?.toLowerCase()}_cta_v`,
            options: [
              {
                label: 'Rounded Outline',
                value: 'rounded-outline'
              },
              {
                label: 'Link',
                value: 'link'
              }
            ],
            admin: {
              description:
                'Variant Style of button - reference Button component in storybook'
            }
          },
          IconSelect({ name: `${name}_cta` }),
          ...fields
        ]
      }
    ]
  };
}

export default CTA;
