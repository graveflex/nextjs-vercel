import type { SerializedEditorState } from 'lexical';

/* /apps/web/src/components/RichText */
export type PayloadRichTextT = {
  content: SerializedEditorState;
};
export type SerializedLexicalNode = {
  children?: SerializedLexicalNode[];
  direction: string;
  format: number;
  indent?: string | number;
  type: string;
  version: number;
  style?: string;
  mode?: string;
  text?: string;
  tag?: string;
};
