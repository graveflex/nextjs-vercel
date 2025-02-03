import { createServerFeature } from '@payloadcms/richtext-lexical';

export const EyebrowFeature = createServerFeature({
  feature: {
    ClientFeature: './feature.client.ts#EyebrowFeature'
  },
  key: 'eyebrowFeature'
});
