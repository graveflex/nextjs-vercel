/* eslint-disable no-console */

'use client';

import React from 'react';
import RenderIcon, { type IconProps } from '@mono/ui/components/RenderIcon';
import styled, { css } from '@refract-ui/sc';
import type { DefaultTheme } from 'styled-components';

type colorProps = keyof DefaultTheme['allColors'];
type colorTokenProps = keyof DefaultTheme['colorTokens'];

export type ButtonProps = {
  $color: colorProps | colorTokenProps;
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'reset' | 'submit';
  $variant?: 'rounded-outline' | 'link' | 'featured';
  icon?: IconProps;
  children?: React.ReactNode | string | number;
  onClick?: () => void;
};

const StyledButton = styled.button<ButtonProps>`
  ${({ theme: { allColors }, $color }) => css`
    background-color: ${allColors[$color]};
  `}
`;

function Button({
  type = 'button',
  $color = 'primary',
  size = 'md',
  $variant = 'rounded-outline',
  onClick = () => console.log('@--> click'),
  icon,
  children
}: ButtonProps) {
  return (
    // eslint-disable-next-line react/button-has-type
    <StyledButton
      onClick={onClick}
      type={type}
      $color={$color}
      size={size}
      $variant={$variant}
      icon={icon}
    >
      {children ? <span className="button-text">{children}</span> : null}
      {icon && RenderIcon(icon)}
    </StyledButton>
  );
}

export default Button;
