import type { ComponentType } from 'react';
import React from 'react';
import dynamic from 'next/dynamic';
import { SubTheme } from '@refract-ui/sc/lens';

import { themeList } from 'theme/src/theme';

import type { Page } from '@web/payload/payload-types';

const defaultOpts = {
  suspense: true,
  ssr: true
};

const blockList = {
  // InsertBlockDict
  parallaxBackground: dynamic(() => import('@web/blocks/ParallaxBackground'), {
    ...defaultOpts
  }),

  heroRevealBlock: dynamic(() => import('@web/blocks/HeroRevealBlock'), {
    ...defaultOpts
  }),

  faqBlock: dynamic(() => import('@web/blocks/FAQBlock'), { ...defaultOpts }),
  textImageBlock: dynamic(() => import('@web/blocks/TextImageBlock'), {
    ...defaultOpts
  }),
  heroBlock: dynamic(() => import('@web/blocks/HeroBlock'), { ...defaultOpts })
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
