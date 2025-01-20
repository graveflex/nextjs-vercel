import type { Tag } from '@mono/types/payload-types';
import React from 'react';

export type StaticTagType = {
  label: Tag['label'];
  onClick?: () => void;
  isButton?: boolean;
  isActive?: boolean;
};

function StaticTag({ label, isButton = false, onClick }: StaticTagType) {
  return isButton ? (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  ) : (
    <div>{label}</div>
  );
}

export default StaticTag;
