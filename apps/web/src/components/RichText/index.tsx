import React from 'react';

import type { SerializedText } from '@web/components/RichText/utils/serializeText';
import type { PayloadRichTextT } from '@web/primitives/primatives';

import serializeSlateText from './utils/serializeText';

// NOTE: intended coercion -- payload doesn't provide a specific type
function RichText({ content, ...props }: PayloadRichTextT) {
  return <div {...props}>{serializeSlateText(content as SerializedText)}</div>;
}

export default RichText;
