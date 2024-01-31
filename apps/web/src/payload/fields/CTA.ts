import type { GroupField } from 'payload/types';

function CTA({
  name,
  interfaceName,
  fields = []
}: Partial<GroupField> = {}): GroupField {
  return {
    name: name || 'cta',
    type: 'group',
    interfaceName: interfaceName || 'CTAType',
    fields: [
      {
        name: 'label',
        label: 'Label',
        type: 'text',
        required: false
      },
      {
        name: 'href',
        label: 'Route',
        admin: {
          description: 'Route for link'
        },
        type: 'text',
        required: false
      },
      ...fields
    ]
  };
}

export default CTA;
