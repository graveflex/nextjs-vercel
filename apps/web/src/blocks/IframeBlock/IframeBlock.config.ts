import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import type { Block } from 'payload';

const IframeBlock: Block = {
  slug: 'iframeBlock',
  interfaceName: 'IframeBlockT',
  fields: [
    BlockConfig(),
    {
      type: 'richText',
      name: 'title',
      localized: true,
      label: 'Title',
      required: false
    },
    {
      type: 'text',
      name: 'iframe',
      label: 'Iframe Src',
      required: true
    }
  ]
};

export default IframeBlock;
