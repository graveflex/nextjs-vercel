'use client';

import { containerStyles } from '@mono/theme/src/ThemeProvider';
import type * as themeList from '@mono/theme/src/theme';
import type { Nav as NavT } from '@mono/types/payload-types';
import Footer from '@mono/ui/components/Footer';
import Header from '@mono/ui/components/Header';
import MaybeThemed from '@mono/ui/components/MaybeThemed';
import useLockBodyScroll from '@mono/ui/lib/hooks/useLockBodyScroll';
import { DEFAULT_LOCALE, type LanguageLocale } from '@mono/web/lib/constants';
import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import { unstable_cache } from 'next/cache';
import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';

export interface LayoutType extends PropsWithChildren<NavT> {
  theme?: keyof typeof themeList | null;
  params: {
    locale: LanguageLocale;
    draft?: boolean;
  };
}

async function Layout({
  children,
  theme,
  params: { locale = DEFAULT_LOCALE, draft }
}: LayoutType) {
  const [menuOpen, setMenuOpen] = useState(false);
  useLockBodyScroll(menuOpen);

  const fetchNavData = unstable_cache(
    async (draft: boolean | undefined, locale: LanguageLocale) => {
      const payload = await getPayloadHMR({ config });
      const data = await payload.findGlobal({
        slug: 'nav',
        locale,
        draft,
        depth: 2,
        fallbackLocale: DEFAULT_LOCALE
      });
      return data;
    },

    [[locale, draft].filter((x) => x).join('/')]
  );
  const navData = await fetchNavData(draft, locale);
  return (
    <MaybeThemed theme={theme} style={containerStyles}>
      <div style={containerStyles}>
        <Header {...navData.header} open={menuOpen} setOpen={setMenuOpen} />
        <main role="main" style={{ zIndex: 0 }}>
          {children}
        </main>
        <Footer {...navData.footer?.footerItems} />
      </div>
    </MaybeThemed>
  );
}

export default Layout;
