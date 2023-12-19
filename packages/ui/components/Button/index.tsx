/* eslint-disable no-console */

'use client';

import React, { PropsWithChildren } from 'react';
import { css, styled } from 'styled-components';

export type ButtonType = {
  type?: 'button' | 'submit';
  onClick?: () => void;
};

const StyledButton = styled.button`
  padding: 10px 24px;
  border-radius: 62px;
  border: none;
  ${({ theme: { themeColors } }) => css`
    background: ${themeColors.primary};
  `}
`;

function Button({
  type = 'button',
  onClick = () => console.log('@--> click'),
  children
}: PropsWithChildren<ButtonType>) {
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
}

export default Button;
