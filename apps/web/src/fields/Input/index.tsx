'use client';

import React from 'react';
import styled, { css } from 'styled-components';

import type { InputType } from '@web/payload/payload-types';

const StyledInput = styled.input`
  all: unset;

  padding: 1rem 1.25rem;
  font-size: 1rem;
  ${({ theme: { colors, themeColors } }) => css`
    background: ${colors.white};
    color: ${colors.black};
    border: 1px solid ${themeColors.secondary};
  `}
`;

function Input({ placeholder, type, ...props }: InputType) {
  const inputPlaceholder = placeholder || '';
  const inputType = type || 'text';
  return (
    <StyledInput placeholder={inputPlaceholder} type={inputType} {...props} />
  );
}

export default Input;
