import type { GroupField } from 'payload/types';

import Link from './Link';

function CTA({
  name,
  interfaceName,
  defaultVariant,
  fields = [],
  condition
}: Partial<GroupField> & {
  defaultVariant?: string;
  condition?: () => boolean;
} = {}): GroupField {
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
          Link(),
          {
            name: 'variant',
            label: 'Variant',
            type: 'select',
            defaultValue: defaultVariant || 'solid',
            dbName: `${name?.toLowerCase()}_cta_v`,
            options: [
              {
                label: 'Outline',
                value: 'outline'
              },
              {
                label: 'Solid',
                value: 'solid'
              },
              {
                label: 'Link',
                value: 'link'
              }
            ],
            admin: {
              description:
                'Variant Style of button - reference Button component in storybook',
              condition
            }
          },
          ...fields
        ]
      }
    ]
  };
}

export default CTA;
