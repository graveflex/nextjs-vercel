import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import type { Block } from 'payload';

const CtaSections: Block = {
  slug: 'ctaSections',
  interfaceName: 'CtaSectionsT',
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

export default CtaSections;
