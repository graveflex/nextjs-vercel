'use client';

// THIS WRAPPER IS USED ON THE GLOBAL LAYOUT

import React from 'react';
import * as themeList from '@mono/theme/src/theme';
import styled, { SubTheme } from '@refract-ui/sc';

interface OuterMaybeThemedType {
  children: React.ReactNode;
  theme?: null | keyof typeof themeList | '_';
}

const OuterGrid = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  min-height: 100svh;
`;

function OuterMaybeThemed({ children, theme }: OuterMaybeThemedType) {
  if (theme && theme !== '_') {
    return (
      <SubTheme theme={themeList[theme]}>
        <OuterGrid>{children}</OuterGrid>
      </SubTheme>
    );
  }

  return children;
}

export default OuterMaybeThemed;
