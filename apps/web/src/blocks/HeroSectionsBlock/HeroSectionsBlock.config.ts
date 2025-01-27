import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import type { Block } from 'payload';

const HeroSectionsBlock = (prefix: string): Block => ({
  slug: 'heroSectionsBlock',
  interfaceName: 'HeroSectionsBlockT',
  dbName: `${prefix}herSecB`,
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
});

export default HeroSectionsBlock;
