'use client';

import React from 'react';
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
    color: ${themeColors.dark};
    font-size: 2.1875rem;

    ${$isLarge &&
    css`
      font-size: 4.375rem;
    `}
  `}
`;

// TODO: move to the icon component
function QuoteIcon() {
  return (
    <svg
      width="35"
      height="36"
      viewBox="0 0 35 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="35x35/quote">
        <path
          id="shape"
          d="M6.61011 28.6802L4.88765 25.6486C8.81486 23.7195 11.2952 21.6525 11.8464 17.6564L11.7086 17.5875C11.0885 18.1387 10.2617 18.4143 9.22825 18.4143C6.54121 18.4143 4.61206 16.7608 4.61206 13.7292C4.61206 11.1111 6.47231 8.76855 9.98613 8.76855C13.7755 8.76855 15.9803 11.1111 15.9803 15.934C15.9803 22.2037 11.9153 26.062 6.61011 28.6802ZM21.6299 28.6802L19.9075 25.6486C23.9036 23.7195 26.315 21.6525 26.9351 17.6564L26.7973 17.5875C26.1083 18.1387 25.3505 18.4143 24.317 18.4143C21.561 18.4143 19.6319 16.7608 19.6319 13.7292C19.6319 11.1111 21.4921 8.76855 25.006 8.76855C28.8643 8.76855 31.0001 11.1111 31.0001 15.934C31.0001 22.2037 27.004 26.062 21.6299 28.6802Z"
          fill="#3E660A"
        />
      </g>
    </svg>
  );
}

export type QuoteType = {
  copy?: string;
  isLarge?: boolean;
};

function Quote({ copy = 'copy', isLarge = false }: QuoteType) {
  return (
    <Container>
      <QuoteIcon />
      <CopyWrapper $isLarge={isLarge}>{copy}</CopyWrapper>
    </Container>
  );
}

export default Quote;
