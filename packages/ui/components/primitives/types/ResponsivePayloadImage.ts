import type { ImageProps } from 'next/image';

/* Payload generates image types that consist of `number | Image | null` */
export type PayloadImageProps = {
  url: string | null;
  alt?: string | null;
  height?: number | null;
  width?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    mobile?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    tablet?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    desktop?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    ultrawide?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
  imageProps?: Partial<ImageProps> | null;
  additionalProps?: {
    objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down' | null;
    isRounded?: boolean | null;
    aspectRatio?: '6/7' | '7/6' | '1/1' | '3/2' | '16/9' | 'initial' | null;
  };
  className?: string;
  classOverride?: string;
};
