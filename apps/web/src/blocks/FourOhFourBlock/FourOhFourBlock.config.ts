import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import MakeVariations from '@mono/web/payload/utils/makeVariations';
import type { Block } from 'payload';

const FourOhFourBlock = (prefix: string): Block => ({
  slug: 'fourOhFourBlock',
  interfaceName: 'FourOhFourBlockT',
  dbName: `${prefix}FourOhFourBlock`,
  fields: [BlockConfig(), MakeVariations(3, prefix, 'FourOhFourBlock')]
});

export default FourOhFourBlock;
