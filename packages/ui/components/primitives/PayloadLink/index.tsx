'use client';

import React from 'react';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import RenderIcon, { type IconProps } from '@mono/ui/components/RenderIcon';
import styled from 'styled-components';

export type PayloadLinkProps = Partial<LinkProps> & {
  children?: React.ReactNode;
  newTab?: boolean;
  icon?: IconProps;
  ariaLabel?: string;
  title?: string;
};

const LinkStyled = styled(Link)`
  width: fit-content;
`;

function PayloadLink({
  href,
  children,
  ariaLabel,
  icon,
  scroll,
  title,
  newTab
}: PayloadLinkProps) {
  if (!href) {
    return null;
  }
  return (
    <LinkStyled
      href={href}
      scroll={scroll}
      target={newTab ? '_blank' : undefined}
      aria-label={ariaLabel}
      title={title}
    >
      {children}
      {icon && <RenderIcon {...icon} />}
    </LinkStyled>
  );
}

export default PayloadLink;
