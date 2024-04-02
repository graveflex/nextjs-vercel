'use client';

import React from 'react';
import type { InputType } from '@mono/types/payload-types';
import styled from '@refract-ui/sc';

const StyledInput = styled.input`
  all: unset;
  box-sizing: border-box;
  text-align: left;
`;

function Input({ placeholder, type, ...props }: InputType) {
  const inputPlaceholder = placeholder || '';
  const inputType = type || 'text';
  return (
    <StyledInput placeholder={inputPlaceholder} type={inputType} {...props} />
  );
}

export default Input;
