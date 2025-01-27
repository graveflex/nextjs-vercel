import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import type { Block } from 'payload';

const HeaderSectionBlock = (prefix: string): Block => ({
  slug: 'headerSectionBlock',
  interfaceName: 'HeaderSectionBlockT',
  dbName: `${prefix}hdrSec`,
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

export default HeaderSectionBlock;
