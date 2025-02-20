// Types
import type { BlogSectionT as PayloadType } from '@mono/types/payload-types';

import dynamic from 'next/dynamic';
// Libraries
import React from 'react';

// Components
import Wrapper from '@mono/web/components/Wrapper';

export type BlogSectionType = Omit<PayloadType, 'blockType'>;

const defaultOpts = {
  suspense: true,
  ssr: true
};
const variations = {
  '1': dynamic(() => import('./variations/Variant1'), { ...defaultOpts }),
  '2': dynamic(() => import('./variations/Variant2'), { ...defaultOpts }),
  '3': dynamic(() => import('./variations/Variant3'), { ...defaultOpts }),
  '4': dynamic(() => import('./variations/Variant4'), { ...defaultOpts }),
  '5': dynamic(() => import('./variations/Variant5'), { ...defaultOpts })
};

function BlogSection({ variant, ...props }: BlogSectionType) {
  const VariantComponent = variations[variant];

  return (
    <Wrapper {...props.wrapper}>
      <VariantComponent />
    </Wrapper>
  );
}

export default BlogSection;
