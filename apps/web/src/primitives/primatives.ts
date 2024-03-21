import type { ImageProps } from 'next/image';

import type { Image as ImageT } from '@web/payload/payload-types';

/* /apps/web/src/components/ResponsivePayloadImage */
export type PayloadImageT = {
  image: ImageT;
  imageProps?: Partial<ImageProps>;
  aspectRatio?: '6/7' | '7/6' | '1/1' | '3/2' | '16/9' | 'initial';
  isRounded?: boolean;
  className?: string;
  classOverride?: string;
};

/* /apps/web/src/components/PayloadIcons */
export type PayloadIconT = {
  name: string /* List all public icon names here */;
  size?: number;
  color?: string;
};

/* /apps/web/src/components/PayloadButton */
export type PayloadButtonT = {
  color: 'primary' | 'secondary' | 'bg' | 'fg';
  icon?: Partial<PayloadIconT>;
  variant?: 'solid' | 'outlined' | 'link';
};

/* /apps/web/src/components/PayloadLink */
export type PayloadLinkT = {
  href: string;
  text: string;
  style?: Partial<PayloadButtonT>;
  isNewTab?: boolean;
};
