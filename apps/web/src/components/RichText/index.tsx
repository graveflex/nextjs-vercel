import React from 'react';

import type { PayloadRichTextT } from '@web/primitives/primatives';

import serializeText from './utils/serializeText';

// NOTE: intended coercion -- payload doesn't provide a specific type
function RichText(content: PayloadRichTextT): JSX.Element {
  return <div>{serializeText(content)}</div>;
}

export default RichText;
