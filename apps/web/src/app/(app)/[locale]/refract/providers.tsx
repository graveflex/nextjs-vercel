'use client';

import light from '@mono/theme/src/light';
import { GlobalStyles } from '@refract-ui/sc';
import type React from 'react';

interface ProviderProps {
  children: React.ReactNode;
}

export default function RefractProviders({ children }: ProviderProps) {
  return <GlobalStyles theme={light}>{children}</GlobalStyles>;
}
