'use client';

import type { SVGProps } from 'react';
import React from 'react';

function SvgDoubleCaretUp(props: SVGProps<SVGSVGElement>) {
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
        d="M12.8536 5H12.1465L5.14648 12L5.85359 12.7071L12.5 6.06066L19.1465 12.7071L19.8536 12L12.8536 5ZM19.8536 20L12.8536 13H12.1465L5.14648 20L5.85359 20.7071L12.5 14.0607L19.1465 20.7071L19.8536 20Z"
        fill={color || '#0C0E0F'}
      />
    </svg>
  );
}

export default SvgDoubleCaretUp;
