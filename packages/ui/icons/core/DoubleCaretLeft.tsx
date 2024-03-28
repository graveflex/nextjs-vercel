'use client';

import type { SVGProps } from 'react';
import React from 'react';

function SvgDoubleCaretLeft(props: SVGProps<SVGSVGElement>) {
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
        d="M12.1464 12.1465V12.8536L19.1464 19.8536L19.8536 19.1465L13.2071 12.5L19.8536 5.85359L19.1464 5.14648L12.1464 12.1465ZM4.14648 12.1465V12.8536L11.1465 19.8536L11.8536 19.1465L5.20714 12.5001L11.8536 5.85363L11.1465 5.14652L4.14648 12.1465Z"
        fill={color || '#3E660A'}
      />
    </svg>
  );
}

export default SvgDoubleCaretLeft;
