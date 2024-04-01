import React from 'react';

import type { PayloadRichTextProps } from '../types/PayloadRichText';

import serializeText from './utils/serializeText';

// NOTE: intended coercion -- payload doesn't provide a specific type
function RichText(content: PayloadRichTextProps): JSX.Element {
  return <div>{serializeText(content)}</div>;
}

export default RichText;
