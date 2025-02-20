import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import MakeVariations from '@mono/web/payload/utils/makeVariations';
import type { Block } from 'payload';

const PricingSectionsBlock = (prefix: string): Block => ({
  slug: 'pricingSectionsBlock',
  interfaceName: 'PricingSectionsBlockT',
  dbName: `${prefix}PricingSectionsBlock`,
  fields: [BlockConfig(), MakeVariations(4, prefix, 'PricingSectionsBlock')]
});

export default PricingSectionsBlock;
