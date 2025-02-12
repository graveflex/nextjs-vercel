import type { HeroSectionsBlockT as PayloadType } from '@mono/types/payload-types';
import Wrapper from '@mono/web/components/Wrapper';
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
  }),
  '3': dynamic(() => import('./layouts/HeroSections3'), {
    ...defaultOpts
  }),
  '4': dynamic(() => import('./layouts/HeroSections4'), {
    ...defaultOpts
  }),
  '5': dynamic(() => import('./layouts/HeroSections5'), {
    ...defaultOpts
  }),
  '6': dynamic(() => import('./layouts/HeroSections6'), {
    ...defaultOpts
  }),
  '8': dynamic(() => import('./layouts/HeroSections8'), {
    ...defaultOpts
  }),
  '9': dynamic(() => import('./layouts/HeroSections9'), {
    ...defaultOpts
  })
};

function HeroSectionsBlock({
  content,
  image,
  variant = '1',
  wrapper
}: HeroSectionsBlockType) {
  const Component: ComponentType<HeroSectionsBlockType> = layoutList[variant];

  return (
    <Wrapper {...wrapper}>
      <Component content={content} image={image} variant={variant} />
    </Wrapper>
  );
}

export default HeroSectionsBlock;
