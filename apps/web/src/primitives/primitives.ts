import type { ImageProps } from 'next/image';
import type { Image } from '@mono/web/payload/payload-types';
import type { SerializedEditorState } from 'lexical';

/* /apps/web/src/components/ResponsivePayloadImage */
export type PayloadImageT = Partial<Image> & {
  imageProps?: Partial<ImageProps> | null;
  additionalProps?: Image['additionalProps'];
  className?: string;
  classOverride?: string;
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

/* /apps/web/src/components/PayloadIcons */
export type PayloadIconT = {
  name: string /* List all public icon names here */;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'bg' | 'fg';
};

/* /apps/web/src/components/PayloadButton */
export type PayloadButtonT = {
  color: 'primary' | 'secondary' | 'bg' | 'fg';
  icon?: Partial<PayloadIconT>;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outlined' | 'link';
};

/* /apps/web/src/components/PayloadLink */
export type PayloadLinkT = {
  href?: string;
  text: Partial<PayloadTextT> | string;
  style?: Partial<PayloadButtonT>;
  newTab?: boolean;
  linkType?: string;
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
