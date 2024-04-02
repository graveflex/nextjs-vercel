'use client';

import React from 'react';
import QuoteIcon from '@mono/ui/icons/core/Quote';
import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: transparent;
`;

// TODO: use theme for quote2 & quote1 [large] textVariant
// instead of font-size
const CopyWrapper = styled.div<{ $isLarge: boolean }>`
  ${({ theme: { themeColors }, $isLarge }) => css`
    color: ${themeColors.plain};
    font-size: 2.1875rem;

    ${$isLarge &&
    css`
      font-size: 4.375rem;
    `}
  `}
`;

export type QuoteType = {
  copy?: string;
  isLarge?: boolean;
  iconProps?: {
    width?: string;
    height?: string;
    color?: string;
  };
};

function Quote({
  copy = 'copy',
  isLarge = false,
  iconProps = { width: '35', height: '35' }
}: QuoteType) {
  return (
    <Container>
      <QuoteIcon {...iconProps} />
      <CopyWrapper $isLarge={isLarge}>{copy}</CopyWrapper>
    </Container>
  );
}

export default Quote;
