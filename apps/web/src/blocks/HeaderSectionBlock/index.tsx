import type { HeaderSectionBlockT as PayloadType } from '@mono/types/payload-types';
import Wrapper from '@mono/ui/components/Wrapper';
import dynamic from 'next/dynamic';
import React from 'react';
import type { ComponentType } from 'react';

export type HeaderSectionBlockType = Omit<PayloadType, 'blockType'>;

const defaultOpts = {
  suspense: true,
  ssr: true
};

// Todo: Convert into a prop:
const layout: number = 1;

const layoutList: Record<number, ComponentType<HeaderSectionBlockType>> = {
  1: dynamic(() => import('./layouts/HeaderSection1'), {
    ...defaultOpts
  })
};

function HeaderSectionBlock({ title }: HeaderSectionBlockType) {
  const Component: ComponentType<HeaderSectionBlockType> = layoutList[layout];

  return <Component title={title} />;
}

export default HeaderSectionBlock;
