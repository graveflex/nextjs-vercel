import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import type { Block } from 'payload';

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
        },
        {
          label: '4',
          value: '4'
        },
        {
          label: '5',
          value: '5'
        },
        {
          label: '6',
          value: '6'
        },
        {
          label: '8',
          value: '8'
        },
        {
          label: '9',
          value: '9'
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
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'images'
    }
  ]
});

export default HeroSectionsBlock;
