import React from 'react';

import type { PayloadRichTextT } from '@web/primitives/primatives';

import serializeSlateText from './utils/serializeText';

// NOTE: intended coercion -- payload doesn't provide a specific type
function RichText({ content, className }: PayloadRichTextT): JSX.Element {
  return <div className={className}>{serializeSlateText(content)}</div>;
}

export default RichText;
