// import Wrapper from '@mono/ui/components/Wrapper';
import type { CtaSectionsBlockT as PayloadType } from '@mono/types/payload-types';
import React from 'react';

import { Button } from '@mono/web/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';

export type CtaSectionsBlockType = Omit<PayloadType, 'blockType'>;

const defaultOpts = {
  suspense: true,
  ssr: true
};

const layoutList: Record<string, ComponentType<CtaSectionsBlockType>> = {
  '1': dynamic(() => import('./layouts/CtaSections1'), {
    ...defaultOpts
  }),
  '2': dynamic(() => import('./layouts/CtaSections2'), {
    ...defaultOpts
  }),
  '3': dynamic(() => import('./layouts/CtaSections3'), {
    ...defaultOpts
  }),
  '4': dynamic(() => import('./layouts/CtaSections4'), {
    ...defaultOpts
  }),
  '5': dynamic(() => import('./layouts/CtaSections5'), {
    ...defaultOpts
  }),
  '6': dynamic(() => import('./layouts/CtaSections6'), {
    ...defaultOpts
  }),
  '7': dynamic(() => import('./layouts/CtaSections7'), {
    ...defaultOpts
  })
};

function CtaSections({
  title = 'Action-Driving headline that creates urgency',
  variant = '1'
}: CtaSectionsBlockType) {
  const Component: ComponentType<CtaSectionsBlockType> = layoutList[variant];

  return <Component title={title} variant={variant} />;
}

export default CtaSections;
