'use client';

import type { SVGProps } from 'react';
import React from 'react';

function SvgDoubleCaretRight(props: SVGProps<SVGSVGElement>) {
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
        d="M13.8536 19.8536L20.8536 12.8536V12.1465L13.8536 5.14648L13.1464 5.85359L19.7929 12.5L13.1464 19.1465L13.8536 19.8536ZM12.8536 12.8536V12.1465L5.85359 5.14652L5.14648 5.85363L11.7929 12.5001L5.14648 19.1465L5.85359 19.8536L12.8536 12.8536Z"
        fill={color || '#3E660A'}
      />
    </svg>
  );
}

export default SvgDoubleCaretRight;
