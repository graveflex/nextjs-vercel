import React from 'react';
import styled, { css } from '@refract-ui/sc';
import type { DefaultTheme } from 'styled-components';

interface WrapperProps extends React.ComponentProps<'section'> {
  backgroundImage?: string;
  backgroundVideo?: string;
  contentWidth?: DefaultTheme['settings']['breakpointNames'];
  fullBleed?: boolean;
  gutter?: boolean | keyof DefaultTheme['spacingTokens'];
}

type WrapperContainerProps = {
  [K in keyof WrapperProps as `$${K}`]: WrapperProps[K];
};

const Container = styled.section<WrapperContainerProps>`{
  ${({
    $gutter = 'blockH',
    theme: {
      spacingTokens,
      settings: { spacingUnits }
    }
  }) => css`
    gap: ${spacingTokens[$gutter]}${spacingUnits};
  `}
}`;

function Wrapper(props: WrapperProps) {
  return <Container {...props} />;
}

export default Wrapper;
