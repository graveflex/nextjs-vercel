'use client';

import RenderIcon, { type IconProps } from '@mono/ui/components/RenderIcon';
import styled from '@refract-ui/sc';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type React from 'react';

export type PayloadLinkProps = Partial<LinkProps> & {
  children?: React.ReactNode;
  newTab?: boolean | null;
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
      rel="preconnect"
    >
      {children}
      {icon && <RenderIcon {...icon} />}
    </LinkStyled>
  );
}

export default PayloadLink;
