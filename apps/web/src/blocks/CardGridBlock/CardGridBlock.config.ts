import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import Card from '@mono/web/payload/fields/Card';
import type { Block } from 'payload';

const CardGridBlock: Block = {
  slug: 'cardGridBlock',
  interfaceName: 'CardGridBlockT',
  fields: [
    BlockConfig(),
    {
      type: 'array',
      name: 'cards',
      label: 'Cards',
      required: false,
      localized: false,
      fields: [Card()]
    }
  ]
};

export default CardGridBlock;
