import {
  AlignFeature,
  FixedToolbarFeature,
  lexicalEditor
} from '@payloadcms/richtext-lexical';
import type { Block } from 'payload';

export const Eyebrow: Block = {
  slug: 'eyebrow',
  fields: [
    {
      type: 'richText',
      name: 'eyebrowText',
      editor: lexicalEditor({
        features: () => [AlignFeature(), FixedToolbarFeature()]
      })
    }
  ]
};
