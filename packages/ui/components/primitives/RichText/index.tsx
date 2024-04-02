import React from 'react';
import type { SerializedEditorState } from 'lexical';

import type { ResponsivePayloadWrapperProps } from '../ResponsivePayloadImage';

import serializeText from './utils/serializeText';

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
  value?: string | ResponsivePayloadWrapperProps;
};

// NOTE: intended coercion -- payload doesn't provide a specific type
function RichText(content: PayloadRichTextProps): JSX.Element {
  return <div>{serializeText(content)}</div>;
}

export default RichText;
