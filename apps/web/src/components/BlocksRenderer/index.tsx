import type { ComponentType } from 'react';
import React from 'react';
import dynamic from 'next/dynamic';
import MaybeThemed from '@mono/web/components/MaybeThemed';
import type { Page } from '@mono/web/payload/payload-types';

const defaultOpts = {
  suspense: true,
  ssr: true
};

const blockList = {
  // InsertBlockDict
  faqBlock: dynamic(() => import('@mono/web/blocks/FAQBlock'), {
    ...defaultOpts
  }),
  textImageBlock: dynamic(() => import('@mono/web/blocks/TextImageBlock'), {
    ...defaultOpts
  }),
  heroBlock: dynamic(() => import('@mono/web/blocks/HeroBlock'), {
    ...defaultOpts
  })
};

function BlocksRenderer({ blocks }: { blocks: NonNullable<Page['blocks']> }) {
  return blocks?.map(({ blockType, ...blockProps }) => {
    // don't render if block is hidden
    const hide = blockProps?.blockConfig?.hidden ?? false;
    if (hide) {
      return null;
    }

    const Component = blockList[blockType] as ComponentType<typeof blockProps>;
    const t = blockProps?.blockConfig?.theme;

    if (Component) {
      return (
        <MaybeThemed key={blockProps?.id} theme={t}>
          <Component {...blockProps} />
        </MaybeThemed>
      );
    }

    return null;
  });
}

export default BlocksRenderer;
