import BlogDetail from '@mono/web/app/(app)/[locale]/(blog)/blog/[...slug]/page';
import type React from 'react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function (props: React.ComponentProps<typeof BlogDetail>) {
  const params = await props.params;

  const nextParams = Promise.resolve({
    ...params,
    draft: true
  });

  return (
    <BlogDetail
      {...{
        ...props,
        params: nextParams
      }}
    />
  );
}
