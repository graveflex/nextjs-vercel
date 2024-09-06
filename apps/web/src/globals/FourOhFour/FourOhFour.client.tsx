'use client';

import type { FourOhFour as FourOhFourTypes } from '@mono/types/payload-types';
import NotFoundC from '@mono/web/components/NotFound';
import { DEFAULT_LOCALE, type LOCALES } from '@mono/web/lib/constants';
import { WEB_URL } from '@mono/web/lib/constants';
import React, { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

export default function FourOhFour({
  markdown
}: { markdown: Partial<FourOhFourTypes> }) {
  const [markdownData, setMarkdownData] = useState<Partial<FourOhFourTypes>>(
    markdown ?? {}
  );
  const path = usePathname();
  const locale =
    (path.split('/')[1] as (typeof LOCALES)[number]) ?? DEFAULT_LOCALE;

  useEffect(() => {
    const fetchMarkdownData = async () => {
      const route = `${WEB_URL}/api/globals/four-oh-four?locale=${locale}`;

      try {
        const data = fetch(route).then((res) => res.json());

        setMarkdownData(await data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMarkdownData();
  }, [locale]);

  if (!markdownData) {
    return null;
  }

  return (
    <NotFoundC
      markdownData={{
        ...markdownData,
        blockType: 'markdownBlock',
        id: '42069'
      }}
    />
  );
}
