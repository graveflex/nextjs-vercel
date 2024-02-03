'use client';

import type { PropsWithChildren } from 'react';
import React, { useMemo } from 'react';
import styled, { useTheme } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Container = styled.section<{ $responsiveStyles: any[] | null }>`
  --maxWidth: 1024px;
  --margin: 25px;
  --column: min(calc(var(--maxWidth) / 2), calc(50% - var(--margin)));
  display: grid;
  grid-template-columns: 1fr var(--column) var(--column) 1fr;

  & > * {
    grid-column: 2 / 4;
  }

  ${({ $responsiveStyles }) => $responsiveStyles}
`;

// TODO:
// - [x] padding
// - [ ] margin
// - [x] change at breakpoints

export type WrapperType = PropsWithChildren;

const responsiveStyleDict = {
  paddingTop: 'padding-top',
  paddingBottom: 'padding-bottom'
};

function Wrapper({ children, blockConfig, ...props }) {
  const theme = useTheme();
  const mq = useMemo(() => {
    const { mq: mediaQueries } = theme;
    return mediaQueries;
  }, [theme]);
  const responsiveStyles = useMemo(() => {
    if (!blockConfig.responsiveStyles) {
      return null;
    }
    const styleEntries = blockConfig.responsiveStyles;
    return Object.entries(mq)
      .map(([bp]) => {
        if (!styleEntries[bp]) {
          return null;
        }

        const entryValueAtBp = styleEntries[bp];
        const cssEntries = Object.entries(entryValueAtBp).filter(
          ([, v]) => !!v
        );
        if (!cssEntries.length) {
          return null;
        }
        const cssValue = cssEntries.map(
          ([k, v]) => `${responsiveStyleDict[k]}: ${v};`
        );
        return mq[bp]`${cssValue}`;
      })
      .filter((x) => !!x);
  }, [blockConfig.responsiveStyles, mq]);
  return (
    <Container {...props} $responsiveStyles={responsiveStyles}>
      {children}
    </Container>
  );
}

export default Wrapper;
