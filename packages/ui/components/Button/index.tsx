/* eslint-disable no-console */

'use client';

import React from 'react';
import styled, { css } from '@refract-ui/sc';

export type ButtonType = {
  type?: 'button' | 'submit';
  onClick?: () => void;
};

const StyledButton = styled.button`
  ${({ theme: { themeColors } }) => css`
    background: ${themeColors.primary};
  `}
`;

function Button({
  type = 'button',
  onClick = () => console.log('@--> click')
}: ButtonType) {
  return (
    // eslint-disable-next-line react/button-has-type
    <StyledButton onClick={onClick} type={type}>
      Boop
    </StyledButton>
  );
}

export default Button;
