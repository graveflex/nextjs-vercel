'use client';

import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react';
import { useRouter } from 'next/navigation.js';
import { useState, useEffect } from 'react';
import type React from 'react';

export const RefreshRouteOnSave: React.FC = () => {
  const router = useRouter();
  const [serverURL, setServerURL] = useState<string | null>(null);

  useEffect(() => {
    router.refresh();
    setServerURL(window.location.origin);
  }, [router.refresh])

  if (!serverURL) {
    return null;
  }

  return <PayloadLivePreview refresh={() => router.refresh()} serverURL={serverURL} />;
};
