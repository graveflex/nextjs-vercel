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
  '4': dynamic(() => import('./layouts/HeroSections4'), {
    ...defaultOpts
  }),
  '6': dynamic(() => import('./layouts/HeroSections6'), {
    ...defaultOpts
  }),
  '9': dynamic(() => import('./layouts/HeroSections9'), {
    ...defaultOpts
  })
};

export const genImgColumnOrder = (
  imagePosition: HeroSectionsBlockType['imagePosition']
) => (imagePosition === 'left' ? 'lg:order-first' : 'lg:order-last');

function HeroSectionsBlock({
  content,
  variant = '1',
  imagePosition,
  media,
  form,
  wrapper
}: HeroSectionsBlockType) {
  const Component: ComponentType<HeroSectionsBlockType> = layoutList[variant];

  return (
    <Wrapper {...wrapper}>
      <Component
        content={content}
        form={form}
        media={media}
        imagePosition={imagePosition}
        variant={variant}
      />
    </Wrapper>
  );
}

export default HeroSectionsBlock;
