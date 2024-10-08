import BlockConfig from '@mono/web/payload/fields/BlockConfig';
import CTA from '@mono/web/payload/fields/CTA';
import type { Block } from 'payload';

const SectionHeaderBlock = (prefix: string): Block => ({
  // <-- convert to function
  slug: 'sectionHeaderBlock',
  interfaceName: 'SectionHeaderBlockT',
  dbName: `${prefix}SHeaderB`, // <-- prepend with prefix
  fields: [
    BlockConfig(),
    {
      type: 'text',
      name: 'eyebrow',
      label: 'Eyebrow',
      required: false
    },
    {
      type: 'richText',
      name: 'content',
      label: 'Content (Header + Subheader)',
      required: true
    },
    {
      type: 'select',
      name: 'alignment',
      label: 'Alignment',
      defaultValue: 'center',
      options: [
        {
          label: 'Center',
          value: 'center'
        },
        {
          label: 'Left',
          value: 'left'
        },
        {
          label: 'Right',
          value: 'right'
        }
      ]
    },
    CTA()
  ]
});

export default SectionHeaderBlock;
