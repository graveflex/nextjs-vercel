import CatchHomePage from '@mono/web/app/(app)/[locale]/page';
import type React from 'react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function (
  props: React.ComponentProps<typeof CatchHomePage>
) {
  return (
    <CatchHomePage
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
