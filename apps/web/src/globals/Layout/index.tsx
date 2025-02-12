import Footer from '@mono/ui/components/Footer';
import Header from '@mono/web/components/Header';
import { DEFAULT_LOCALE, type LanguageLocale } from '@mono/web/lib/constants';
import config from '@payload-config';
import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';
import {
  SidebarProvider,
} from '@mono/web/components/ui/Sidebar';

import type React from 'react';

export type LayoutProps = {
  locale: LanguageLocale;
  draft?: boolean;
  children: React.ReactNode;
};

export default async function Layout({
  children,
  locale,
  draft,
}: LayoutProps) {
  const fetchNavData = unstable_cache(
    async (draft: boolean | undefined, locale: LanguageLocale) => {
      const payload = await getPayload({ config });
      return payload.findGlobal({
        slug: 'nav',
        locale,
        draft,
        depth: 2,
        fallbackLocale: DEFAULT_LOCALE
      });
    },
    [[locale, draft, 'nav'].filter((x) => x).join('/')],
    {
      tags: ['global-nav', 'global-cache-key']
    }
  );

  const navData = await fetchNavData(draft, locale);

  return (
    <SidebarProvider>
      <Header />
      <main>{children}</main>
      <Footer {...navData.footer?.footerItems} />
    </SidebarProvider>
  );
}
