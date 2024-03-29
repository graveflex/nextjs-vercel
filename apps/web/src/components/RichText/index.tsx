import React from 'react';
import type { PayloadRichTextProps } from '@mono/web/primitives/primitives';

import serializeText from './utils/serializeText';

// NOTE: intended coercion -- payload doesn't provide a specific type
function RichText(content: PayloadRichTextProps): JSX.Element {
  return <div>{serializeText(content)}</div>;
}

export default RichText;
