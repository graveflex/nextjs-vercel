/* eslint-disable no-console */

'use client';

import React from 'react';
import type { PayloadButtonProps } from '@mono/web/src/primitives/primitives';
import styled, { css } from '@refract-ui/sc';

const StyledButton = styled.button<{ color: PayloadButtonProps['color'] }>`
  ${({ theme: { themeColors }, color }) => css`
    background-color: ${themeColors[color]};
  `}
`;

function Button({
  type = 'button',
  color = 'primary',
  onClick = () => console.log('@--> click')
}: PayloadButtonProps) {
  return (
    // eslint-disable-next-line react/button-has-type
    <StyledButton onClick={onClick} type={type} color={color}>
      Boop
    </StyledButton>
  );
}

export default Button;
