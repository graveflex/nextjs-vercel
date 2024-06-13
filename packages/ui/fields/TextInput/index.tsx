'use client';

import type { ChangeEvent } from 'react';
import React, { useState } from 'react';
import Error from '@mono/ui/fields/Error';
import styled from '@refract-ui/sc';

export type TextInputType = {
  name: string;
  placeholder?: string | null;
  label?: string | null;
  required?: boolean;
  helpText?: string | null;
  errorMessage?: string | null;
  id?: string;
  value?: string;
  onChange?: (value: string) => void;
};

const StyledInput = styled.input`
  all: unset;
  font-size: 1rem;
  background-color: transparent;
  box-sizing: border-box;
  text-align: left;
  /* Slight padding offset to center relative to label */
  height: 3rem;
  padding: 1rem;

  width: 100%;
  border-radius: 6px;
  transition:
    outline 0.05s ease-out,
    box-shadow 0.1s ease-out;
  border: 1px solid currentColor;

  &::placeholder {
    // update with theme
    opacity: 0.5;
  }

  &:hover {
    // hover styles here
  }

  &:focus,
  &:focus-within {
    // focus styles here
  }
`;

const StyledTextContainer = styled.div`
  position: relative;
`;

const FieldContainer = styled.div`
  position: relative;
`;

const Label = styled.label`
  font-size: 0.875rem;
`;

function TextInput({
  name,
  placeholder,
  onChange,
  value,
  label = 'label',
  required = false,
  errorMessage,
  helpText,
  id
}: TextInputType) {
  const [inputValue, setInputValue] = useState<string>(value ?? '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const changeValue = e.target.value;
    setInputValue(changeValue);

    if (onChange) {
      onChange(changeValue);
    }
  };

  const requiredText = required ? <>{label} *</> : label;
  return (
    <FieldContainer>
      <Label> {requiredText} </Label>
      <StyledTextContainer>
        <StyledInput
          id={id ?? `${name}-input`}
          name={name}
          type="text"
          placeholder={placeholder as string}
          value={inputValue}
          onChange={handleChange}
        />
      </StyledTextContainer>
      <p>{helpText}</p>
      {error && <Error id={id} label={label} errorMessage={errorMessage} />}
    </FieldContainer>
  );
}

export default TextInput;
