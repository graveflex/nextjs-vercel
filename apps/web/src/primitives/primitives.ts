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

/* /apps/web/src/components/RichText */
export type PayloadRichTextT = {
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
