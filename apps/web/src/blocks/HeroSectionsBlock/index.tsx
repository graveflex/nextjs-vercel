import type { HeroSectionsBlockT as PayloadType } from '@mono/types/payload-types';
import Wrapper from '@mono/ui/components/Wrapper';
import dynamic from 'next/dynamic';
import React from 'react';
import type { ComponentType } from 'react';

export type HeroSectionsBlockType = Omit<PayloadType, 'blockType'>;

const defaultOpts = {
  suspense: true,
  ssr: true
};

// Todo: Convert into a prop:
const layout: number = 1;

const layoutList: Record<number, ComponentType<HeroSectionsBlockType>> = {
  1: dynamic(() => import('./layouts/HeroSections1'), {
    ...defaultOpts
  })
};

function HeroSectionsBlock({ title }: HeroSectionsBlockType) {
  const Component: ComponentType<HeroSectionsBlockType> = layoutList[layout];

  return <Component title={title} />;
}

export default HeroSectionsBlock;
