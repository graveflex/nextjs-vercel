'use client';

import type { SVGProps } from 'react';
import React from 'react';

function SvgCaretDown(props: SVGProps<SVGSVGElement>) {
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
        d="M12.8536 16.7071H12.1465L5.14648 9.70711L5.85359 9L12.5 15.6464L19.1465 9L19.8536 9.70711L12.8536 16.7071Z"
        fill={color || '#0C0E0F'}
      />
    </svg>
  );
}

export default SvgCaretDown;
