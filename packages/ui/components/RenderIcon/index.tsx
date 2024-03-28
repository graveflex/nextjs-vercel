'use client';

import React from 'react';

import coreIcons from '../../icons/core';

export type IconProps = {
  name?: keyof typeof coreIcons;
  color?: string;
  height?: string;
  width?: string;
};

function CoreIcons({
  name = 'Quote',
  color = '#0C0E0F',
  height = '35',
  width = '35'
}: IconProps) {
  const Icon = coreIcons?.[name];
  if (Icon) {
    return <Icon color={color} height={height} width={width} />;
  }
  return null;
}

function RenderIcon({ name, color, height, width }: IconProps) {
  return <CoreIcons name={name} color={color} height={height} width={width} />;
}

export default RenderIcon;
