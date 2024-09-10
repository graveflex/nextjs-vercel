import type { Image as PayloadImageProps } from '@mono/types/payload-types';

export default function multipleImages(
  image: PayloadImageProps | number | undefined | null,
  mobileImage: PayloadImageProps | number | undefined | null,
  breakPoint: 'tablet' | 'desktop' | 'ultrawide' | 'mobile'
): PayloadImageProps | null {
  if (image !== null && typeof image === 'object' && image.id !== undefined) {
    if (
      mobileImage !== null &&
      typeof mobileImage === 'object' &&
      mobileImage.id !== undefined
    ) {
      return {
        ...mobileImage,
        id: mobileImage.id,
        sizes: {
          [breakPoint]: {
            ...image
          }
        }
      };
    }
    return { ...image };
  }
  return null;
}
