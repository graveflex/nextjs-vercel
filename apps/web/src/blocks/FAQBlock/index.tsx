'use client';

import React, { useMemo } from 'react';
import type { FAQBlockT as PayloadType } from '@mono/types/payload-types';
import RichText from '@mono/ui/components/primitives/RichText';
import Wrapper from '@mono/web/components/Wrapper';
import styled from '@refract-ui/sc';
import s from 'styled-components';

export type FAQBlockType = Omit<PayloadType, 'blockType'>;

const Section = s(Wrapper)``;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: min(100%, 600px);
  margin: auto;
`;

const Title = styled.h2({ m: 0, p: 0 })``;

const SubTitle = s(RichText)``;

const Details = styled.details``;

const Summary = styled.summary({ t: 'h3' })`
  list-style: none;
`;

function FAQBlock({ title, subTitle, items }: FAQBlockType) {
  const Items = useMemo(() => {
    if (!items || !items.length) {
      return null;
    }

    return items.map(({ title: t, subTitle: st, id }) => {
      if (!t || !st) {
        return null;
      }
      return (
        <Details key={id}>
          <Summary>{t}</Summary>
          <RichText {...st} />
        </Details>
      );
    });
  }, [items]);
  return (
    <Section>
      <Header>
        {title && <Title>{title}</Title>}
        {subTitle && <SubTitle {...subTitle} />}
      </Header>
      {Items}
    </Section>
  );
}

export default FAQBlock;
