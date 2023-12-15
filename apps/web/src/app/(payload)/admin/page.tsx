'use client';

import React, { useEffect, useState } from 'react';
import Root from 'payload/dist/admin/Root';

function PayloadAdmin() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <Root />;
}

export default PayloadAdmin;
