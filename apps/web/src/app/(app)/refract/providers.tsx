'use client';

import type React from 'react';
import { GlobalStyles } from '@refract-ui/sc';
import light from '@mono/theme/src/light';

interface ProvidersProps {
  children: React.Children;
}

export default function RefractProviders({ children }: ProvidersProps) {
  return <GlobalStyles theme={light}>{children}</GlobalStyles>;
}
