'use client';

import type { SVGProps } from 'react';
import React from 'react';

function SvgSolidArrowLeft(props: SVGProps<SVGSVGElement>) {
  const { color, width, height, viewBox } = props;
  return (
    <svg
      width={width || '25'}
      height={height || '25'}
      viewBox={viewBox || '0 0 35 35'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M27 28.2049L27 6.79372C27 6.35536 26.6446 6 26.2063 6C26.071 6 25.938 6.03457 25.8198 6.10043L6.35369 16.9511C6.13534 17.0728 6 17.3032 6 17.5532C6 17.8042 6.13644 18.0353 6.35618 18.1566L25.8206 28.901C25.9383 28.9659 26.0705 29 26.2049 29C26.644 29 27 28.644 27 28.2049Z"
        fill={color || '#0C0E0F'}
      />
    </svg>
  );
}

export default SvgSolidArrowLeft;
