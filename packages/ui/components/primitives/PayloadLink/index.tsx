'use client';

import React from 'react';
import Link from 'next/link';

import type { PayloadLinkProps } from '../types/PayloadLink';

function PayloadLink({ href, text, scroll, newTab }: PayloadLinkProps) {
  return (
    <Link href={href} scroll={scroll} target={newTab ? '_blank' : undefined}>
      {text}
    </Link>
  );
}

export default PayloadLink;
