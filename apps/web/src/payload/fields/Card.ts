import type { GroupField } from 'payload/types';

import CTA from './CTA';

const cta = CTA({ name: 'card' });

function Card({
  interfaceName,
  localized,
  fields = []
}: Partial<GroupField> = {}): GroupField {
  return {
    name: 'card',
    type: 'group',
    interfaceName: interfaceName || 'CardType',
    fields: [
      {
        name: 'image',
        label: 'Image',
        type: 'upload',
        relationTo: 'images',
        required: false,
        admin: {
          description:
            'The image that will be displayed at the top of the card.'
        }
      },
      {
        label: 'Card Content',
        type: 'collapsible',
        admin: {
          initCollapsed: true
        },
        fields: [
          {
            name: 'eyebrow',
            label: 'Eyebrow',
            type: 'text',
            localized,
            required: false
          },
          {
            name: 'headline',
            label: 'Headline',
            type: 'text',
            localized,
            required: true,
            admin: {
              description: 'The main headline of the card.'
            }
          },
          {
            name: 'subHead',
            label: 'Subhead',
            type: 'richText',
            localized,
            required: false,
            admin: {
              description: 'The subhead of the card.'
            }
          }
        ]
      },
      {
        name: 'ctas',
        label: 'CTAs',
        localized,
        type: 'array',
        admin: {
          description:
            'The call to actions that appear at the bottom of the card. Be mindful of text length.'
        },
        fields: [cta]
      },
      ...fields
    ]
  };
}

export default Card;
