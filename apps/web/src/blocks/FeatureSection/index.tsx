// Types
import type { FeatureSection as PayloadType } from '@mono/types/payload-types';

// Libraries
import React from 'react';
import dynamic from 'next/dynamic';

// Components
import Wrapper from '@mono/web/components/Wrapper';

export type FeatureSectionType = Omit<PayloadType, 'blockType'>;

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

function FeatureSection({ variant, ...props }: FeatureSectionType) {
  const VariantComponent = Variant(variant);

  return (
    <Wrapper {...props.wrapper}>
      <VariantComponent />
    </Wrapper>
  );
}

export default FeatureSection;
