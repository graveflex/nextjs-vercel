import React from 'react';

import type { SerializedText } from './utils/serializeSlateText';
import serializeSlateText from './utils/serializeSlateText';

export type RichTextType = {
  content: {
    [k: string]: unknown;
  }[];
};

// NOTE: intended coercion -- payload doesn't provide a specific type
function RichText({ content, ...props }: RichTextType) {
  return <div {...props}>{serializeSlateText(content as SerializedText)}</div>;
}

export default RichText;
