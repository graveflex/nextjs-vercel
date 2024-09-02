'use client';

import light from '@mono/theme/src/light';
import { GlobalStyles } from '@refract-ui/sc';
import type React from 'react';

interface ProvidersProps {
  children: React.Children;
}

export default function RefractProviders({ children }: ProvidersProps) {
  return <GlobalStyles theme={light}>{children}</GlobalStyles>;
}
