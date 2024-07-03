import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import type { Block } from 'payload';

const FormBlock: Block = {
  slug: 'formBlock',
  interfaceName: 'FormBlockT',
  fields: [
    BlockConfig(),
    {
      type: 'richText',
      name: 'content',
      localized: true,
      label: 'Content',
      required: false
    },
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true
    }
  ]
};

export default FormBlock;
