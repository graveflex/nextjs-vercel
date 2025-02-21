import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import type { Block } from 'payload';

// Block variants w/ left or right positioned media:
const variantsWithImagePosition = ['1', '2', '4', '5'];
const variantsWithForm = ['4', '5'];

const HeroSectionsBlock = (prefix: string): Block => ({
  slug: 'heroSectionsBlock',
  interfaceName: 'HeroSectionsBlockT',
  dbName: `${prefix}herSecB`,
  fields: [
    BlockConfig(),
    {
      type: 'select',
      name: 'variant',
      label: 'Variant',
      defaultValue: '1',
      required: true,
      enumName: 'vrnt',
      dbName: `${prefix}herSecB_v`,
      options: [
        {
          label: '1',
          value: '1'
        },
        {
          label: '2',
          value: '2'
        },
        {
          label: '3',
          value: '3'
        }
      ],
      admin: {
        description: 'The layout variant for the block.'
      }
    },
    {
      name: 'content',
      label: 'content',
      type: 'richText',
      localized: true,
      required: false
    },
    {
      name: 'media',
      label: 'Media',
      type: 'relationship',
      relationTo: ['images', 'videos'],
      hasMany: false,
      required: true
    },
    {
      name: 'imagePosition',
      label: 'Image Position',
      type: 'select',
      options: [
        {
          label: 'Left',
          value: 'left'
        },
        {
          label: 'Right',
          value: 'right'
        }
      ],
      defaultValue: 'right',
      admin: {
        description:
          'For certain variants, the position of the image on desktop screens.',
        condition: (_, siblingData) => {
          if (variantsWithImagePosition.includes(siblingData.variant)) {
            return true;
          }
          return false;
        }
      }
    },
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: false,
      admin: {
        description:
          'Add a form to be displayed at the bottom of the content section.',
        condition: (_, siblingData) => {
          if (variantsWithForm.includes(siblingData.variant)) {
            return true;
          }
          return false;
        }
      }
    }
  ]
});

export default HeroSectionsBlock;
