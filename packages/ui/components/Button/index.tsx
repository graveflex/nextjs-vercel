'use client';

import React from 'react';
import RenderIcon, { type IconProps } from '@mono/ui/components/RenderIcon';
import styled, { css } from '@refract-ui/sc';
import type { DefaultTheme } from 'styled-components';

type colorProps = keyof DefaultTheme['allColors'];
type colorTokenProps = keyof DefaultTheme['colorTokens'];

export type ButtonProps = {
  $variant?: 'solid' | 'outline' | 'link';
  $color: colorProps | colorTokenProps;
  // $invert?: boolean; enable this for theme inversion for button text color
  icon?: IconProps;
  children?: React.ReactNode | string | number;
  element?: 'button' | 'span';
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
};

const getVariantStyles = (
  variant: ButtonProps['$variant'],
  color: ButtonProps['$color']
): ReturnType<typeof css> => {
  if (variant === 'link') {
    return css`
      ${({ theme: { allColors, box } }) => css`
        background-color: transparent;
        color: ${allColors[color]};
        border: 1px solid transparent;
        border-bottom-color: ${allColors[color]};
        border-radius: 0;
        padding: 0;
        ${box.t('button')};

        &:hover {
          color: ${allColors.fg};
          border-bottom-color: ${allColors.fg};
        }
      `}
    `;
  }

  if (variant === 'outline') {
    return css`
      ${({ theme: { allColors, box } }) => css`
        color: ${allColors[color]};
        background-color: transparent;
        border: 1px solid ${allColors[color]};
        border-radius: 1rem;
        ${box.t('button')};

        &:hover {
          color: ${allColors.fg};
          border-color: ${allColors.fg};
        }
      `}
    `;
  }

  return css`
    ${({ theme: { allColors, box } }) => css`
      ${box.t('button')};
      background-color: ${allColors[color]};
      border-radius: 1rem;

      &:hover {
        opacity: 0.9;
        outline: 1px solid ${allColors.fg};
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
        /* revert any hover / focus styles when disabled */
        background-color: transparent;
        border: 1px solid ${allColors[color]};
        border-radius: 1rem;
      }
    `}
  `;
};

const constructButtonStyles = () => {
  return css<ButtonProps>`
    ${({ $color, $variant }) => css`
      display: inline-flex;
      padding: 0.62rem 1rem 0.75rem;
      min-height: 2.625rem;
      width: fit-content;
      column-gap: 0.75rem;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg path {
        fill: currentColor;
      }

      .button-text {
        line-height: 1.25;
        position: relative;
        top: 1px;
      }

      ${getVariantStyles($variant, $color)}
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

const InnerWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
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
    $variant: props?.$variant ?? 'solid'
    // $invert: props?.$invert ?? false
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
        {children ? (
          <InnerWrapper className="button-text">
            {children} {icon && RenderIcon(icon)}
          </InnerWrapper>
        ) : null}
      </StyledButton>
    );
  }
  return (
    <StyleSpan {...styleProps} className={buttonClass}>
      {children && (
        <InnerWrapper className="button-text">
          {children} {icon && RenderIcon(icon)}
        </InnerWrapper>
      )}
    </StyleSpan>
  );
}

export default Button;
