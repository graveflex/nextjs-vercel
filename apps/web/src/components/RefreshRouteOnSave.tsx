import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react';
import { useRouter } from 'next/navigation.js';
import type React from 'react';
import { useEffect, useState } from 'react';

export const RefreshRouteOnSave: React.FC = () => {
  const router = useRouter();
  const [serverURL, setServerURL] = useState('');

  useEffect(() => {
    setServerURL(window.location.origin);
  }, []);

  if (!serverURL) {
    return null;
  }

  return <PayloadLivePreview refresh={router.refresh} serverURL={serverURL} />;
};
