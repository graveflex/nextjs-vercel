/* eslint-disable react/jsx-no-useless-fragment */

'use client';

import { useServerInsertedHTML } from 'next/navigation';
import type { PropsWithChildren } from 'react';
import type React from 'react';
import { useState } from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function StyledComponentsRegistry({
  children
}: PropsWithChildren<object>): React.JSX.Element {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState<ServerStyleSheet>(
    () => new ServerStyleSheet()
  );

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    // github.com/vercel/next.js/issues/42526
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    styledComponentsStyleSheet.instance?.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') {
    return <>{children}</>;
  }

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
