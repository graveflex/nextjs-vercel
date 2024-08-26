'use client';

import type { Tag } from '@mono/types/payload-types';
import styled, { css } from '@refract-ui/sc';
import React from 'react';

const TagContent = styled.p({ bc: 'secondary', c: 'secondary', t: 'small' })`
  border: 1px solid;
  border-radius: 2px;
  display: grid;
  place-items: center;
  min-height: 31px;
  max-width: max-content;
  padding: 0 0.5rem;
`;

const TagButton = styled.button({ c: 'secondary', bc: 'secondary' })<{
  $isActive: boolean;
}>`
  border: 1px solid;
  border-radius: 2px;
  min-height: 31px;
  background-color: transparent;
  padding: 0 0.5rem;
  transition: background-color 0.15s, color 0.15s;


  ${({ $isActive, theme: { allColors } }) => css`
    &:hover {
      background-color: ${allColors.secondary};
      color: ${allColors.neutral10};
      box-shadow: none;
    }

    &:focus {
      outline: 2px solid ${allColors.green60};
    }

    ${
      $isActive &&
      css`
      background-color: ${allColors.secondary};
      color: ${allColors.neutral10};
    `
    }
  `}
`;

export type StaticTagType = {
  label: Tag['label'];
  onClick?: () => void;
  isButton?: boolean;
  isActive?: boolean;
};

function StaticTag({
  label,
  isButton = false,
  isActive = false,
  onClick
}: StaticTagType) {
  return isButton ? (
    <TagButton $isActive={isActive} onClick={onClick}>
      {label}
    </TagButton>
  ) : (
    <TagContent>{label}</TagContent>
  );
}

export default StaticTag;
