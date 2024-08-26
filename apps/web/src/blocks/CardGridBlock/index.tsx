'use client';

import type { CardGridBlockT as PayloadType } from '@mono/types/payload-types';
import GeneralCard from '@mono/ui/components/GeneralCard';
import Wrapper from '@mono/ui/components/Wrapper';
import s from '@refract-ui/sc';
import React, { useMemo } from 'react';

export type CardGridBlockType = Omit<PayloadType, 'blockType'>;

const CardsWrapper = s.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  flex-wrap: wrap;
  margin: auto;
  height: 100%;
  gap: 2rem;
`;

function CardGridBlock({ cards, blockConfig }: CardGridBlockType) {
  const Cards = useMemo(() => {
    if (!cards || !cards.length) {
      return null;
    }

    return cards.map(({ card, id }) => {
      if (!card) {
        return null;
      }

      return <GeneralCard key={id} {...card} />;
    });
  }, [cards]);

  return (
    <Wrapper {...blockConfig} hidden={blockConfig?.hidden ?? false}>
      <CardsWrapper>{Cards}</CardsWrapper>
    </Wrapper>
  );
}

export default CardGridBlock;
