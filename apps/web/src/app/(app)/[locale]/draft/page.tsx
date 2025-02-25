import HomePage from '@mono/web/app/(app)/[locale]/page';
import type React from 'react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function (props: React.ComponentProps<typeof HomePage>) {
  const params = await props.params;

  // Create a new params object with the draft property
  const updatedParams = {
    ...params,
    draft: true
  };

  return (
    <HomePage
      {...{
        ...props,
        params: Promise.resolve(updatedParams)
      }}
    />
  );
}
