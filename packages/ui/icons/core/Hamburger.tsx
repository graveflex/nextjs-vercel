'use client';

import type { SVGProps } from 'react';
import React from 'react';

function SvgHamburger(props: SVGProps<SVGSVGElement>) {
  const { color, width, height, viewBox } = props;
  return (
    <svg
      width={width || '20'}
      height={height || '20'}
      viewBox={viewBox || '0 0 20 20'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.5 15H17.5"
        stroke={color || '#0C0E0F'}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color || '#0C0E0F'}
      />
      <path
        d="M2.5 10H17.5"
        stroke={color || '#0C0E0F'}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color || '#0C0E0F'}
      />
      <path
        d="M2.5 5H17.5"
        stroke={color || '#0C0E0F'}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color || '#0C0E0F'}
      />
    </svg>
  );
}

export default SvgHamburger;
