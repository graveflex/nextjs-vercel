import type { ImageProps } from 'next/image';

import type { Image } from '@web/payload/payload-types';

/* /apps/web/src/components/ResponsivePayloadImage */
export type PayloadImageT = Partial<Image> & {
  imageProps?: Partial<ImageProps> | null;
  additionalProps?: Image['additionalProps'];
  className?: string;
  classOverride?: string;
};
