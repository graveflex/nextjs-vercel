// Types
import type { BlogSectionT as PayloadType } from '@mono/types/payload-types';

import dynamic from 'next/dynamic';
// Libraries
import React from 'react';

// Components
import Wrapper from '@mono/web/components/Wrapper';

export type BlogSectionType = Omit<PayloadType, 'blockType'>;

const Variant = (variant: string) => {
  // Can extend this to accept different props based on the variant
  // const Variant = (variant: string, payload: any) => {
  const defaultOpts = {
    suspense: true,
    ssr: true
  };

  // Add logic here if you want to load different components based on the variant
  // let options = {
  //   ...defaultOpts
  // };

  return dynamic(() => import(`./variations/Variant${variant}`), {
    ...defaultOpts
  });
};

function BlogSection({ variant, ...props }: BlogSectionType) {
  const VariantComponent = Variant(variant);

  return (
    <Wrapper {...props.wrapper}>
      <VariantComponent />
    </Wrapper>
  );
}

export default BlogSection;
