import type { ImageProps } from 'next/image';

import type { Image } from '@web/payload/payload-types';

/* /apps/web/src/components/ResponsivePayloadImage */
export type PayloadImageT = {
  image: Image;
  imageProps?: Partial<ImageProps>;
  aspectRatio?: '6/7' | '7/6' | '1/1' | '3/2' | '16/9' | 'initial';
  isRounded?: boolean;
  style?: React.CSSProperties;
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
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outlined' | 'link';
};

export type PayloadNumberT = {
  number: number;
};

export type PayloadTextT = {
  text: string;
};

export type PayloadBridgeTextT = {
  text: string;
  className?: string;
};

/* /apps/web/src/components/PayloadLink */
export type PayloadLinkT = {
  href?: string;
  text: Partial<PayloadTextT> | string;
  style?: Partial<PayloadButtonT>;
  newTab?: boolean;
  linkType?: string;
};

/* /apps/web/src/components/RichText */
export type PayloadRichTextT = {
  content: {
    [key: string]: unknown;
  }[];
  className?: string;
};

export type PayloadDateTimeT = {
  date: string;
  time?: string;
  format?: string;
  className?: string;
};

export type PayloadFileUploadT = {
  label?: string;
  accept?: string;
  multiple?: boolean;
  className?: string;
};
