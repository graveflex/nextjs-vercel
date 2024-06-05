'use client';

import React from 'react';
import RenderIcon, { type IconProps } from '@mono/ui/components/RenderIcon';
import styled, { css } from '@refract-ui/sc';
import type { DefaultTheme } from 'styled-components';

type colorProps = keyof DefaultTheme['allColors'];
type colorTokenProps = keyof DefaultTheme['colorTokens'];

export type ButtonProps = {
  $variant?: 'rounded-outline' | 'link';
  $color: colorProps | colorTokenProps;
  $invert?: boolean;
  icon?: IconProps;
  children?: React.ReactNode | string | number;
  element?: 'button' | 'span';
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
};

const getVariantStyles = (
  variant: ButtonProps['$variant'],
  color: ButtonProps['$color'],
  invert: ButtonProps['$invert']
): ReturnType<typeof css> => {
  const hoverLight = css`
    ${({ theme: { allColors } }) => css`
      ${invert ? allColors.bg : allColors.fg}
    `}
  `;

  const hoverDark = css`
    ${({ theme: { allColors } }) => css`
      ${invert ? allColors.fg : allColors.bg}
    `}
  `;

  if (variant === 'link') {
    return css`
      ${({ theme: { allColors, box } }) => css`
        background-color: transparent;
        color: ${allColors[color]};
        border: 1px solid transparent;
        border-bottom-color: ${allColors[color]};
        border-radius: 0;
        ${box.t('button')};

        &:hover {
          color: ${hoverDark};
          background-color: transparent;
          /* box shadow to avoid content shifting */
          box-shadow: inset 0 -3px 0 ${hoverDark};
        }
      `}
    `;
  }

  return css`
    ${({ theme: { allColors, box } }) => css`
      color: ${allColors[color]};
      ${box.t('button')};
      background-color: transparent;
      border: 1px solid currentColor;
      border-radius: 36px;
      transition:
        background-color 0.2s ease,
        color 0.2s ease,
        border-radius 0.2s ease,
        border-color 0.2s ease;

      &[type='reset'] {
        background-color: transparent;
        color: ${allColors.danger};

        &:hover {
          color: white;
        }
      }

      &[type='submit'] {
        background-color: transparent;
        border-color: ${allColors[color]};

        .button-text {
          color: ${allColors[color]};
        }

        &:hover {
          background-color: ${hoverDark};

          svg {
            fill: white;
          }

          .button-text {
            color: ${hoverLight};
          }
        }
      }

      &:hover {
        border-radius: 6px;
        border-color: transparent;
        background-color: ${hoverDark};
        color: ${hoverLight};
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
        /* revert any hover / focus styles when disabled */
        background-color: transparent;
        border: 1px solid ${allColors[color]};
        border-radius: 36px;
      }
    `}
  `;
};

const constructButtonStyles = () => {
  return css<ButtonProps>`
    ${({ $color, $variant, $invert }) => css`
      display: inline-flex;
      padding: 0 1.125rem;
      min-height: 3.8125rem;
      min-width: 3.8125rem;
      width: fit-content;
      column-gap: 0.75rem;
      align-items: center;
      justify-content: center;
      text-transform: capitalize;
      cursor: pointer;
      svg path {
        fill: currentColor;
      }

      .button-text {
        line-height: 1.25;
        position: relative;
        top: 1px;
      }

      ${getVariantStyles($variant, $color, $invert)}
    `}
  `;
};

const StyledButton = styled.button<ButtonProps>`
  ${constructButtonStyles()}

  &:hover {
    box-shadow: none;
  }
`;

const StyleSpan = styled.span<ButtonProps>`
  ${constructButtonStyles()}
  a {
    display: grid;
    height: 100%;
    align-content: center;
    width: fit-content;

    &,
    &:hover {
      color: inherit;
      text-decoration: none;
    }
  }
`;

function Button({ element = 'span', icon, children, ...props }: ButtonProps) {
  /* Props specific to button element & valid html attributes */
  const buttonProps = {
    type: props.type ?? 'button',
    onClick: props.onClick,
    disabled: props.disabled ?? false,
    role: 'button'
  };

  /* styles & Invalid html attributes */
  const styleProps = {
    $color: props?.$color ?? 'secondary',
    $variant: props?.$variant ?? 'rounded-outline',
    $invert: props?.$invert ?? false
  };
  const buttonClass = `button-${styleProps.$variant}`;

  if (element === 'button') {
    return (
      <StyledButton
        aria-label={`${buttonProps.type}-button`}
        {...buttonProps}
        {...styleProps}
        className={buttonClass}
      >
        {children ? <span className="button-text">{children}</span> : null}
        {icon && RenderIcon(icon)}
      </StyledButton>
    );
  }
  return (
    <StyleSpan {...styleProps} className={buttonClass}>
      {children && <span className="button-text">{children}</span>}
      {icon && RenderIcon(icon)}
    </StyleSpan>
  );
}

export default Button;
