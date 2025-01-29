import type { Page } from '@mono/types/payload-types';

import MaybeThemed from '@mono/ui/components/MaybeThemed';
import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';
import React from 'react';

const defaultOpts = {
  suspense: true,
  ssr: true
};

const blockList = {
  // InsertBlockDict
  ctaSectionsBlock: dynamic(() => import('@mono/web/blocks/CtaSectionsBlock'), {
    ...defaultOpts
  })
};

function BlocksRenderer({ blocks }: { blocks: NonNullable<Page['blocks']> }) {
  return blocks?.map(({ blockType, ...blockProps }) => {
    const Component = blockList[blockType] as ComponentType<typeof blockProps>;

    if (Component) {
      return (
        <MaybeThemed key={blockProps?.id}>
          <Component {...blockProps} />
        </MaybeThemed>
      );
    }

    return null;
  });
}

export default BlocksRenderer;
