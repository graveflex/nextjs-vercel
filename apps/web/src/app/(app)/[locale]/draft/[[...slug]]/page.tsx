import type React from 'react';
import CatchallPage from '@mono/web/app/(app)/[locale]/[[...slug]]/page';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function (
  props: React.ComponentProps<typeof CatchallPage>
) {
  return (
    <CatchallPage
      {...{
        ...props,
        params: {
          ...props.params,
          draft: true
        }
      }}
    />
  );
}
