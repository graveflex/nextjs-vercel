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

const layoutList: Record<string, ComponentType<HeroSectionsBlockType>> = {
  '1': dynamic(() => import('./layouts/HeroSections1'), {
    ...defaultOpts
  }),
  '2': dynamic(() => import('./layouts/HeroSections2'), {
    ...defaultOpts
  })
};

function HeroSectionsBlock({ title, variant = '1' }: HeroSectionsBlockType) {
  const Component: ComponentType<HeroSectionsBlockType> = layoutList[variant];

  return <Component title={title} variant={variant} />;
}

export default HeroSectionsBlock;
