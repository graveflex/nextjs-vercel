import { createServerFeature } from '@payloadcms/richtext-lexical';
import { EyebrowNode } from './EyebrowNode';

export const EyebrowFeature = createServerFeature({
  feature: {
    ClientFeature:
      '@mono/web/components/RichText/Features/eyebrow/eyebrow.client.ts#EyebrowFeatureClient',
    nodes: [
      {
        node: EyebrowNode
      }
    ]
  },
  key: 'eyebrow'
});
