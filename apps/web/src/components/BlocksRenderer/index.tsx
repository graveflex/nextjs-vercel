import type { Page } from '@mono/types/payload-types';

import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';
import React from 'react';

const defaultOpts = {
  suspense: true,
  ssr: true
};

const blockList = {
  // InsertBlockDict
  pricingSectionsBlock: dynamic(
    () => import('@mono/web/blocks/PricingSectionsBlock'),
    {
      ...defaultOpts
    }
  ),
  testimonialsSectionsBlock: dynamic(
    () => import('@mono/web/blocks/TestimonialsSectionsBlock'),
    {
      ...defaultOpts
    }
  ),
  blogSection: dynamic(() => import('@mono/web/blocks/BlogSection'), {
    ...defaultOpts
  }),
  headerSectionsBlock: dynamic(
    () => import('@mono/web/blocks/HeaderSectionsBlock'),
    {
      ...defaultOpts
    }
  ),
  contactSectionsBlock: dynamic(
    () => import('@mono/web/blocks/ContactSectionsBlock'),
    {
      ...defaultOpts
    }
  ),
  faqSectionsBlock: dynamic(() => import('@mono/web/blocks/FaqSectionsBlock'), {
    ...defaultOpts
  }),
  bannersBlock: dynamic(() => import('@mono/web/blocks/BannersBlock'), {
    ...defaultOpts
  }),
  featureSection: dynamic(() => import('@mono/web/blocks/FeatureSection'), {
    ...defaultOpts
  }),
  ctaSectionsBlock: dynamic(() => import('@mono/web/blocks/CtaSectionsBlock'), {
    ...defaultOpts
  }),
  headerSectionBlock: dynamic(
    () => import('@mono/web/blocks/HeaderSectionBlock'),
    {
      ...defaultOpts
    }
  ),
  heroSectionsBlock: dynamic(
    () => import('@mono/web/blocks/HeroSectionsBlock'),
    {
      ...defaultOpts
    }
  )
};

function BlocksRenderer({ blocks }: { blocks: NonNullable<Page['blocks']> }) {
  // TODO: this is only here so the lighthouse check will pass.
  // remove once there is header + footer content
  if (!blocks?.length) {
    return <h2>This page is empty</h2>;
  }

  return blocks?.map(({ blockType, ...blockProps }) => {
    const Component = blockList[blockType] as ComponentType<typeof blockProps>;

    if (Component) {
      return <Component {...blockProps} key={blockProps.id} />;
    }
  });
}

export default BlocksRenderer;
