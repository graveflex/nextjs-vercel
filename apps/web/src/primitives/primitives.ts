import type { ImageProps } from 'next/image';
import type { Image } from '@mono/web/src/payload/payload-types';
import type { SerializedEditorState } from 'lexical';
import type { DefaultTheme } from 'styled-components';

type colorProps = keyof DefaultTheme['themeColors'];

/* /apps/web/src/components/ResponsivePayloadImage */
export type PayloadImageProps = Partial<Image> & {
  imageProps?: Partial<ImageProps> | null;
  additionalProps?: Image['additionalProps'];
  className?: string;
  classOverride?: string;
};

/* /apps/web/src/components/RichText */
export type PayloadRichTextProps = {
  content: SerializedEditorState;
};

export type SerializedLexicalNode = {
  children?: SerializedLexicalNode[];
  direction?: string;
  format?: number;
  indent?: string | number;
  type: string;
  version: number;
  style?: string;
  mode?: string;
  text?: string;
  tag?: string;
  value?: string | Image;
};

/* /apps/web/src/components/PayloadIcons */
export type PayloadIconProps = {
  name: string /* List all public icon names here */;
  size?: 'sm' | 'md' | 'lg';
  color?: colorProps;
};

/* /apps/web/src/components/PayloadButton */
export type PayloadButtonProps = {
  color: colorProps;
  icon?: Partial<PayloadIconProps>;
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'reset' | 'submit';
  variant?: 'solid' | 'outlined' | 'link';
  onClick?: () => void;
};

/* /apps/web/src/components/PayloadLink */
export type PayloadLinkProps = {
  href?: string;
  text: string;
  style?: Partial<PayloadButtonProps>;
  newTab?: boolean;
  linkType?: string;
};

export type PayloadDateTimeProps = {
  date: string;
  time?: string;
  format?: string;
  className?: string;
};

export type PayloadFileUploadprops = {
  label?: string;
  accept?: string;
  multiple?: boolean;
  className?: string;
};
