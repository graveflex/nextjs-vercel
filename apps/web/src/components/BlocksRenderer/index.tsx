import type { ComponentType } from 'react';
import React from 'react';
import dynamic from 'next/dynamic';
import { themeList } from '@mono/theme/src/theme';
import type { Page } from '@mono/web/payload/payload-types';
import { SubTheme } from '@refract-ui/sc/lens';

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
    const hide = blockProps?.blockConfig?.hidden || false;
    if (hide) {
      return null;
    }

    const Component = blockList[blockType] as ComponentType<typeof blockProps>;
    const t = blockProps?.blockConfig?.theme;
    const blockTheme = t && themeList?.[t];

    if (Component) {
      if (blockTheme) {
        return (
          <SubTheme key={blockProps?.id || blockType} theme={blockTheme}>
            <Component {...blockProps} />
          </SubTheme>
        );
      }

      return <Component key={blockProps?.id || blockType} {...blockProps} />;
    }

    return null;
  });
}

export default BlocksRenderer;
