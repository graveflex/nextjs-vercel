/* eslint-disable no-console */

'use client';

import React from 'react';
import RenderIcon, { type IconProps } from '@mono/ui/components/RenderIcon';
import styled, { css } from '@refract-ui/sc';
import type { DefaultTheme } from 'styled-components';

type colorProps = keyof DefaultTheme['themeColors'];

export type ButtonProps = {
  color: colorProps;
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'reset' | 'submit';
  variant?: 'rounded-outline' | 'link' | 'featured';
  icon?: IconProps;
  onClick?: () => void;
};

const StyledButton = styled.button<ButtonProps>`
  ${({ theme: { themeColors }, color }) => css`
    background-color: ${themeColors[color]};
  `}
`;

function Button({
  type = 'button',
  color = 'primary',
  size = 'md',
  variant = 'rounded-outline',
  onClick = () => console.log('@--> click'),
  icon
}: ButtonProps) {
  return (
    // eslint-disable-next-line react/button-has-type
    <StyledButton
      onClick={onClick}
      type={type}
      color={color}
      size={size}
      variant={variant}
      icon={icon}
    >
      Boop
      {icon && RenderIcon(icon)}
    </StyledButton>
  );
}

export default Button;
