'use client';

import type { SVGProps } from 'react';
import React from 'react';

function SvgClose(props: SVGProps<SVGSVGElement>) {
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
        d="M12.5001 13.2072L19.6465 20.3536L20.3536 19.6465L13.2072 12.5001L20.3536 5.35363L19.6465 4.64652L12.5001 11.793L5.35359 4.64648L4.64648 5.35359L11.793 12.5001L4.64652 19.6465L5.35363 20.3536L12.5001 13.2072Z"
        fill={color || '#3E660A'}
      />
    </svg>
  );
}

export default SvgClose;
