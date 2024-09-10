import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import type { Block } from 'payload';

const FullBleedImageBlock = (prefix: string): Block => ({
  slug: 'fullBleedImageBlock',
  interfaceName: 'FullBleedImageBlockT',
  dbName: `${prefix}fbImageB`,
  fields: [
    BlockConfig(),
    {
      type: 'upload',
      name: 'image',
      label: 'Full Bleed Image',
      relationTo: 'images',
      required: true
    },
    {
      type: 'upload',
      name: 'mobileImage',
      label: 'Mobile Image',
      relationTo: 'images',
      required: false
    },
    {
      type: 'checkbox',
      name: 'isBackground',
      label: 'Is Background (controls z-index)',
      defaultValue: false,
      admin: {
        description:
          'Controls the overlap of blocks. If checked, make sure that this block has the bottom padding unset and the block below it has the top padding unset.'
      }
    }
  ]
});

export default FullBleedImageBlock;
