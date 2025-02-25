import type React from 'react';

interface MaybeThemedProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

function MaybeThemed({ children }: MaybeThemedProps) {
  return children;
}

export default MaybeThemed;
