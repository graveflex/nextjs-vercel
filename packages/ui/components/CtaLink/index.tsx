'use client';

import type { PayLoadLink } from '@mono/types/payload-types';
import { ctaEvalHref } from '@mono/ui/utils/ctaEvalHref';
import Link from 'next/link';
import React from 'react';
import type { DefaultTheme } from 'styled-components';
import styled, { css } from 'styled-components';

type colorProps = keyof DefaultTheme['allColors'];

export type CtaLinkType = {
  link?: PayLoadLink;
  ariaLabel?: string;
  $color?: colorProps;
};

// UPDATE TO USE THEMECOLOR
const LinkStyled = styled(Link)<{ color: CtaLinkType['$color'] }>`
  text-decoration: none;
  width: max-content;
  ${({ theme: { allColors }, color }) => css`
    && {
      color: ${color ? allColors[color] : allColors.fg};
    }
    border-bottom: 1px solid transparent;
    cursor: pointer;

    &:hover {
      && {
        color: ${color ? allColors[color] : allColors.fg};
      }
      border-bottom: 1px solid ${color ? allColors[color] : allColors.fg};
      opacity: 0.5;
    }
  `}
`;

function CtaLink({ link, ariaLabel, $color }: CtaLinkType) {
  return (
    <LinkStyled
      color={$color}
      href={link ? (ctaEvalHref(link) as string) : ''}
      aria-label={ariaLabel}
      target={link?.newTab ? '_blank' : undefined}
    >
      {link?.label}
    </LinkStyled>
  );
}

export default CtaLink;
