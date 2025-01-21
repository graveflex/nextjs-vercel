import CatchallPage from '@mono/web/app/(app)/[locale]/[...slug]/page';
import type React from 'react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function (
  props: React.ComponentProps<typeof CatchallPage>
) {
  const params = await props.params;

  // Create a new params object with the draft property
  const updatedParams = Promise.resolve({
    ...params,
    draft: true
  });

  return (
    <CatchallPage
      {...{
        ...props,
        params: updatedParams
      }}
    />
  );
}
