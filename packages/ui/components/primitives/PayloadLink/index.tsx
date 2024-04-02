'use client';

import React from 'react';
import type { LinkProps } from 'next/link';
import Link from 'next/link';

export type PayloadLinkProps = LinkProps & {
  text: string;
  newTab?: boolean;
};

function PayloadLink({ href, text, scroll, newTab }: PayloadLinkProps) {
  return (
    <Link href={href} scroll={scroll} target={newTab ? '_blank' : undefined}>
      {text}
    </Link>
  );
}

export default PayloadLink;
