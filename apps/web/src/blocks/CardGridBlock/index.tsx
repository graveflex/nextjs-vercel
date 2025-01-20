import type { CardGridBlockT as PayloadType } from '@mono/types/payload-types';
import GeneralCard from '@mono/ui/components/GeneralCard';
import Wrapper from '@mono/ui/components/Wrapper';
import React, { useMemo } from 'react';

export type CardGridBlockType = Omit<PayloadType, 'blockType'>;

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
      <div>{Cards}</div>
    </Wrapper>
  );
}

export default CardGridBlock;
