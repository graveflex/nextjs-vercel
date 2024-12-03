import BlogDetail from '@mono/web/app/(app)/[locale]/(blog)/blog/[...slug]/page';
import type React from 'react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function (props: React.ComponentProps<typeof BlogDetail>) {
  const { params } = props;

  const updatedParams = {
    ...params,
    draft: true
  };

  return (
    <BlogDetail
      {...{
        ...props,
        params: updatedParams
      }}
    />
  );
}
