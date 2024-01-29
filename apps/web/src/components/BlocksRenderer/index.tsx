import type { ComponentType } from 'react';
import React from 'react';
import dynamic from 'next/dynamic';
import { SubTheme } from '@refract-ui/sc/lens';

import theme, { darkTheme } from 'theme/src/theme';

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

const themeList = {
  light: theme,
  dark: darkTheme
};

function BlocksRenderer({ blocks }: { blocks: NonNullable<Page['blocks']> }) {
  return blocks?.map(({ blockType, ...blockProps }) => {
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
