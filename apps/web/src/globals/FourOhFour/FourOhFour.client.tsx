'use client';

import type {
  FourOhFour as FourOhFourTypes,
  Nav
} from '@mono/types/payload-types';
import LayoutClient from '@mono/web/globals/Layout/Layout.client';
import { DEFAULT_LOCALE, type LOCALES } from '@mono/web/lib/constants';
import { WEB_URL } from '@mono/web/lib/constants';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type FourOhFourProps = {
  nav: Nav;
};

export default function FourOhFour({ nav }: FourOhFourProps) {
  const [navData, setNavData] = useState<Nav>(nav ?? null);
  const path = usePathname();
  const locale =
    (path?.split('/')[1] as (typeof LOCALES)[number]) ?? DEFAULT_LOCALE;
  const webUrl =
    WEB_URL.includes('undefined') || !WEB_URL ? path?.split('/')[0] : WEB_URL;
  // Using 404 content from translations rather than the cms
  const t = useTranslations('FourOhFour');

  useEffect(() => {
    const fetchMarkdownData = async () => {
      const routeNav = `${webUrl}/api/globals/nav?locale=${locale}`;

      try {
        const [navResponse] = await Promise.all([
          fetch(routeNav).then((res) => res.json())
        ]);

        setNavData(navResponse);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMarkdownData();
  }, [locale, webUrl]);

  if (!navData) {
    return null;
  }

  const styles: React.CSSProperties = {
    alignContent: 'center',
    textAlign: 'center',
    display: 'grid',
    height: '100%'
  };

  return (
    <LayoutClient {...navData}>
      <div style={styles}>
        <h1>{t('title')}</h1>
        <p>{t('content')}</p>
      </div>
    </LayoutClient>
  );
}
