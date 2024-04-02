'use client';

import React from 'react';
import { isNull } from 'lodash';

import coreIcons from '../../icons/core';

export type IconProps = {
  name?: keyof typeof coreIcons | null;
  color?: string | null;
  height?: string | null;
  width?: string | null;
};

function CoreIcons({ name = 'Quote', color, height, width }: IconProps) {
  const Icon = !isNull(name) && coreIcons?.[name];
  if (Icon) {
    return (
      <Icon
        color={color ?? undefined}
        height={height ?? undefined}
        width={width ?? undefined}
      />
    );
  }
  return null;
}

function RenderIcon({ name, color, height, width }: IconProps) {
  return <CoreIcons name={name} color={color} height={height} width={width} />;
}

export default RenderIcon;
