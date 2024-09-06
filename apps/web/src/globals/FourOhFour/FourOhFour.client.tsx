'use client';

import type {
  FourOhFour as FourOhFourTypes,
  Nav
} from '@mono/types/payload-types';
import NotFoundC from '@mono/web/components/NotFound';
import LayoutClient from '@mono/web/globals/Layout/Layout.client';
import { DEFAULT_LOCALE, type LOCALES } from '@mono/web/lib/constants';
import { usePathname } from 'next/navigation';
// import { WEB_URL } from '@mono/web/lib/constants';
import React, { useEffect, useState } from 'react';

export default function FourOhFour({
  markdown
}: { markdown: Partial<FourOhFourTypes> }) {
  const [markdownData, setMarkdownData] = useState<Partial<FourOhFourTypes>>(
    markdown ?? {}
  );
  const [navData, setNavData] = useState<Nav | null>(null);
  const path = usePathname();
  const locale =
    (path.split('/')[1] as (typeof LOCALES)[number]) ?? DEFAULT_LOCALE;
  const webUrl = path.split('/')[0];

  useEffect(() => {
    const fetchMarkdownData = async () => {
      const routeNav = `${webUrl}/api/globals/nav?locale=${locale}`;
      const route404 = `${webUrl}/api/globals/four-oh-four?locale=${locale}`;

      try {
        const nav = fetch(routeNav).then((res) => res.json());
        const data = fetch(route404).then((res) => res.json());

        setNavData(await nav);
        setMarkdownData(await data);
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
