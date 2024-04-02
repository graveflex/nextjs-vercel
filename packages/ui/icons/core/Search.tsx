'use client';

import type { SVGProps } from 'react';
import React from 'react';

function SvgSearch(props: SVGProps<SVGSVGElement>) {
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
        d="M16.7618 18.176C15.3145 19.3183 13.4869 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5C20 13.4869 19.3183 15.3145 18.176 16.7618L22.7071 21.2929L21.2929 22.7071L16.7618 18.176ZM16 7.5C16 8.32843 15.3284 9 14.5 9C13.6716 9 13 8.32843 13 7.5C13 6.67157 13.6716 6 14.5 6C15.3284 6 16 6.67157 16 7.5Z"
        fill={color || '#0C0E0F'}
      />
    </svg>
  );
}

export default SvgSearch;
