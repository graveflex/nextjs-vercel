'use client';

import type { SVGProps } from 'react';
import React from 'react';

function SvgPerson(props: SVGProps<SVGSVGElement>) {
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
        d="M12.5 5C13.8807 5 15 3.88071 15 2.5C15 1.11929 13.8807 0 12.5 0C11.1193 0 10 1.11929 10 2.5C10 3.88071 11.1193 5 12.5 5ZM16 15V8L24 7V5L16 6H9L1 5V7L9 8V15V25H12V15H13V25H16V15Z"
        fill={color || '#0C0E0F'}
      />
    </svg>
  );
}

export default SvgPerson;
