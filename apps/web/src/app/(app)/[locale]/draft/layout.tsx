import { RefreshRouteOnSave } from '@mono/web/components/RefreshRouteOnSave';
import config from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import type { PayloadRequest } from 'payload';
import React from 'react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface DraftLayoutProps {
  children: React.ReactNode;
}

export default async function DraftLayout({ children }: DraftLayoutProps) {
  const payload = await getPayloadHMR({ config });
  const requestHeaders = headers();

  const me = await payload.auth({
    headers: requestHeaders,
    req: {} as PayloadRequest
  });

  // only admins should be able to see drafts
  if (!me?.permissions?.canAccessAdmin) {
    notFound();
  }

  return (
    <>
      <RefreshRouteOnSave />
      {children}
    </>
  );
}
