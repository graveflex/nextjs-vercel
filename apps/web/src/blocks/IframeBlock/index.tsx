'use client';

import React from 'react';
import type { IframeBlockT as PayloadType } from '@mono/types/payload-types';
import RichText from '@mono/ui/components/primitives/RichText';
import Wrapper from '@mono/ui/components/Wrapper';
import s from '@refract-ui/sc';

export type IframeBlockType = Omit<PayloadType, 'blockType'>;

const InnerWrapper = s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IframeWrapper = s.iframe`
  width: 100%;
  height: 1150px;
`;

const Title = s(RichText)`
  margin-bottom: 2rem;
`;

function IframeBlock({ blockConfig, title, iframe }: IframeBlockType) {
  return (
    <Wrapper {...blockConfig} hidden={blockConfig?.hidden ?? false}>
      <InnerWrapper>
        {title && <Title {...title} />}
        <IframeWrapper src={iframe} title="iframe-block" loading="lazy" />
      </InnerWrapper>
    </Wrapper>
  );
}

export default IframeBlock;
