import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import type { Block } from 'payload';

const CtaSectionsBlock: Block = {
  slug: 'ctaSectionsBlock',
  interfaceName: 'CtaSectionsBlockT',
  fields: [
    BlockConfig(),
    {
      name: 'title',
      label: 'title',
      type: 'text',
      localized: true,
      required: false
    }
  ]
};

export default CtaSectionsBlock;
