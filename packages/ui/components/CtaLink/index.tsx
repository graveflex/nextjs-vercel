'use client';

import React from 'react';
import Link from 'next/link';
import type { PayLoadLink } from '@mono/types/payload-types';
import { ctaEvalHref } from '@mono/ui/utils/ctaEvalHref';
import styled, { css } from 'styled-components';

// UPDATE TO USE THEMECOLOR
const LinkStyled = styled(Link)`
  text-decoration: none;
  width: max-content;
  ${({ theme: { allColors } }) => css`
    && {
      color: ${allColors.fg};
    }
  `}
`;

export type CtaLinkType = {
  link?: PayLoadLink;
  ariaLabel?: string;
};

function CtaLink({ link, ariaLabel }: CtaLinkType) {
  return (
    <LinkStyled
      href={link ? (ctaEvalHref(link) as string) : ''}
      aria-label={ariaLabel}
      target={link?.newTab ? '_blank' : undefined}
    >
      {link?.label}
    </LinkStyled>
  );
}

export default CtaLink;
