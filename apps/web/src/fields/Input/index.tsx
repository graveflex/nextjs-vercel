'use client';

import React from 'react';
import styled from 'styled-components';

import type { InputType } from '@web/payload/payload-types';

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
