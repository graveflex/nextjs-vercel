import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import MakeVariations from '@mono/web/payload/utils/makeVariations';
import type { Block } from 'payload';

const HeaderSectionsBlock = (prefix: string): Block => ({
  slug: 'headerSectionsBlock',
  interfaceName: 'HeaderSectionsBlockT',
  dbName: `${prefix}HeaderSectionsBlock`,
  fields: [BlockConfig(), MakeVariations(6, prefix, 'HeaderSectionsBlock')]
});

export default HeaderSectionsBlock;
