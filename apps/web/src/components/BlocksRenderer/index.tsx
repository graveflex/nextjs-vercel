import type { ComponentType } from 'react';
import React from 'react';
import dynamic from 'next/dynamic';

import type { Page } from '@web/payload/payload-types';

const defaultOpts = {
  suspense: true,
  ssr: true
};

const blockList = {
  // InsertBlockDict
  textImageBlock: dynamic(() => import('@web/blocks/TextImageBlock'), {
    ...defaultOpts
  }),
  heroBlock: dynamic(() => import('@web/blocks/HeroBlock'), { ...defaultOpts })
};

function BlocksRenderer({ blocks }: { blocks: NonNullable<Page['blocks']> }) {
  return blocks?.map(({ blockType, ...blockProps }) => {
    const Component = blockList[blockType] as ComponentType<typeof blockProps>;

    if (Component) {
      return <Component key={blockProps?.id || blockType} {...blockProps} />;
    }

    return null;
  });
}

export default BlocksRenderer;
