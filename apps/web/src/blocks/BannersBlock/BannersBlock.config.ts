import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import MakeVariations from '@mono/web/payload/utils/makeVariations';
import type { Block } from 'payload';

const BannersBlock = (prefix: string): Block => ({
  slug: 'bannersBlock',
  interfaceName: 'BannersBlockT',
  dbName: `${prefix}BannersBlock`,
  fields: [BlockConfig(), MakeVariations(6, prefix, 'BannersBlock')]
});

export default BannersBlock;
