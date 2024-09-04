'use client';

import { useTranslations } from 'next-intl';
import { containerStyles } from '@mono/theme/src/ThemeProvider';
import type * as themeList from '@mono/theme/src/theme';
import type { Nav as NavT } from '@mono/types/payload-types';
import Footer from '@mono/ui/components/Footer';
import Header from '@mono/ui/components/Header';
import MaybeThemed from '@mono/ui/components/MaybeThemed';
import React from 'react';
import type { PropsWithChildren } from 'react';

export interface LayoutType extends PropsWithChildren<NavT> {
  theme?: keyof typeof themeList | null;
}

function Layout({ children, footer, header, theme }: LayoutType) {
  const t = useTranslations('Test');
  return (
    <MaybeThemed theme={theme} style={containerStyles}>
      <div style={containerStyles}>
        <Header {...header} />
        <div>
          <b>Locale test:</b> {t('ok')}
        </div>
        <main role="main" style={{ zIndex: 0 }}>
          {children}
        </main>
        <Footer {...footer?.footerItems} />
      </div>
    </MaybeThemed>
  );
}

export default Layout;
