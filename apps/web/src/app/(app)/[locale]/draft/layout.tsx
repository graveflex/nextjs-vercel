import { RefreshRouteOnSave } from '@mono/web/components/RefreshRouteOnSave';
import config from '@payload-config';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import { getPayload } from 'payload';
import type { PayloadRequest } from 'payload';
import type React from 'react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface DraftLayoutProps {
  children: React.ReactNode;
}

export default async function DraftLayout({ children }: DraftLayoutProps) {
  const payload = await getPayload({ config });
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
