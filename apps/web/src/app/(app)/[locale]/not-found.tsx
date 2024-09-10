import FourOhFour from '@mono/web/globals/FourOhFour/FourOhFour.client';
import React from 'react';

export const dynamic = 'force-static';
export const revalidate = 60;

export default async function NotFound() {
  return <FourOhFour />;
}
