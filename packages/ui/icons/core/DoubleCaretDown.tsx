'use client';

import type { SVGProps } from 'react';
import React from 'react';

function SvgDoubleCaretDown(props: SVGProps<SVGSVGElement>) {
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
        d="M5.14648 5.70711L12.1465 12.7071H12.8536L19.8536 5.70711L19.1465 5L12.5 11.6464L5.85359 5L5.14648 5.70711ZM5.14648 13.7071L12.1465 20.7071H12.8536L19.8536 13.7071L19.1465 13L12.5 19.6464L5.85359 13L5.14648 13.7071Z"
        fill={color || '#0C0E0F'}
      />
    </svg>
  );
}

export default SvgDoubleCaretDown;
