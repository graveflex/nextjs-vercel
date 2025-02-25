import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import MakeVariations from '@mono/web/payload/utils/makeVariations';
import type { Block } from 'payload';

const FaqSectionsBlock = (prefix: string): Block => ({
  slug: 'faqSectionsBlock',
  interfaceName: 'FaqSectionsBlockT',
  dbName: `${prefix}FaqSectionsBlock`,
  fields: [BlockConfig(), MakeVariations(4, prefix, 'FaqSectionsBlock')]
});

export default FaqSectionsBlock;
