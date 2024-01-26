'use client';

import type { PropsWithChildren } from 'react';
import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  --maxWidth: 1024px;
  --margin: 25px;
  --column: min(calc(var(--maxWidth) / 2), calc(50% - var(--margin)));
  display: grid;
  grid-template-columns: 1fr var(--column) var(--column) 1fr;

  & > * {
    grid-column: 2 / 4;
  }
`;

// TODO:
// - [ ] padding
// - [ ] margin
// - [ ] change at breakpoints

export type WrapperType = PropsWithChildren;

function Wrapper({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

export default Wrapper;
