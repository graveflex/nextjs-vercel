import type { ImageProps } from 'next/image';
import type { Image } from '@mono/web/src/payload/payload-types';

/* Payload generates image types that consist of `number | Image | null` */
export type PayloadImageProps = Partial<Image> & {
  imageProps?: Partial<ImageProps> | null;
  additionalProps?: Image['additionalProps'];
  className?: string;
  classOverride?: string;
};
