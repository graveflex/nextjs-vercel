'use client';

import type {
  FourOhFour as FourOhFourTypes,
  Nav
} from '@mono/types/payload-types';
import NotFoundC from '@mono/web/components/NotFound';
import LayoutClient from '@mono/web/globals/Layout/Layout.client';
import { DEFAULT_LOCALE, type LOCALES } from '@mono/web/lib/constants';
import { WEB_URL } from '@mono/web/lib/constants';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type FourOhFourProps = {
  markdown: FourOhFourTypes;
  nav: Nav;
};

export default function FourOhFour({ markdown, nav }: FourOhFourProps) {
  const [markdownData, setMarkdownData] = useState<FourOhFourTypes>(
    markdown ?? null
  );
  const [navData, setNavData] = useState<Nav>(nav ?? null);
  const path = usePathname();
  const locale =
    (path?.split('/')[1] as (typeof LOCALES)[number]) ?? DEFAULT_LOCALE;
  const webUrl =
    WEB_URL.includes('undefined') || !WEB_URL ? path?.split('/')[0] : WEB_URL;

  useEffect(() => {
    const fetchMarkdownData = async () => {
      const routeNav = `${webUrl}/api/globals/nav?locale=${locale}`;
      const route404 = `${webUrl}/api/globals/four-oh-four?locale=${locale}`;

      try {
        const [navResponse, markdownResponse] = await Promise.all([
          fetch(routeNav).then((res) => res.json()),
          fetch(route404).then((res) => res.json())
        ]);

        setNavData(navResponse);
        setMarkdownData(markdownResponse);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMarkdownData();
  }, [locale, webUrl]);

  if (!markdownData || !navData) {
    return null;
  }

  return (
    <LayoutClient {...navData}>
      <NotFoundC
        markdownData={{
          ...markdownData,
          blockType: 'markdownBlock',
          id: '42069'
        }}
      />
    </LayoutClient>
  );
}
