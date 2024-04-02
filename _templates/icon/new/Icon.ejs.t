---
to: packages/ui/icons/<%= icon_group %>/<%= name %>.tsx
---
'use client';

import React, { SVGProps } from 'react';


const Svg<%= name %> = (props: SVGProps<SVGSVGElement>) => {
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
      # Add the path here
      <path
        fill={color || '#0C0E0F'}/>
    </svg>
  )
};

export default Svg<%= name %>;