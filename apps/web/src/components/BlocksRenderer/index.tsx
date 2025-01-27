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
  heroSectionsBlock: dynamic(
    () => import('@mono/web/blocks/HeroSectionsBlock'),
    {
      ...defaultOpts
    }
  ),
  fullBleedImageBlock: dynamic(
    () => import('@mono/web/blocks/FullBleedImageBlock'),
    {
      ...defaultOpts
    }
  ),
  iframeBlock: dynamic(() => import('@mono/web/blocks/IframeBlock'), {
    ...defaultOpts
  }),
  iconGridBlock: dynamic(() => import('@mono/web/blocks/IconGridBlock'), {
    ...defaultOpts
  }),
  sectionHeaderBlock: dynamic(
    () => import('@mono/web/blocks/SectionHeaderBlock'),
    {
      ...defaultOpts
    }
  ),
  galleryGridBlock: dynamic(() => import('@mono/web/blocks/GalleryGridBlock'), {
    ...defaultOpts
  }),
  videoBlock: dynamic(() => import('@mono/web/blocks/VideoBlock'), {
    ...defaultOpts
  }),
  formBlock: dynamic(() => import('@mono/web/blocks/FormBlock'), {
    ...defaultOpts
  }),
  cardGridBlock: dynamic(() => import('@mono/web/blocks/CardGridBlock'), {
    ...defaultOpts
  }),
  markdownBlock: dynamic(() => import('@mono/web/blocks/MarkdownBlock'), {
    ...defaultOpts
  }),

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
