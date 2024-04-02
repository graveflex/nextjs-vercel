import type { SerializedEditorState } from 'lexical';

import type { PayloadImageProps } from './ResponsivePayloadImage';

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
  value?: string | PayloadImageProps;
};
