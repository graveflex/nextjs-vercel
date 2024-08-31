'use client';

import { WEB_URL } from '@mono/web/lib/constants';
import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react';
import { useRouter } from 'next/navigation.js';
import React from 'react';

export const RefreshRouteOnSave: React.FC = () => {
  const router = useRouter();
  return <PayloadLivePreview refresh={router.refresh} serverURL={WEB_URL} />;
};
