'use client';

import type { SVGProps } from 'react';
import React from 'react';

function SvgCheck(props: SVGProps<SVGSVGElement>) {
  const { color, width, height, viewBox } = props;
  return (
    <svg
      width={width || '25'}
      height={height || '25'}
      viewBox={viewBox || '0 0 25 25'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.8536 7.85359L10.8537 17.8535C10.6584 18.0488 10.3418 18.0488 10.1466 17.8535L5.64648 13.3534L6.35359 12.6463L10.5001 16.7928L20.1465 7.14648L20.8536 7.85359Z"
        fill={color || '#0C0E0F'}
      />
    </svg>
  );
}

export default SvgCheck;
