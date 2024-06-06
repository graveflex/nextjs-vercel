'use client';

import React, { useState } from 'react';
import type { ChangeEvent } from 'react';
import Error from '@mono/ui/fields/Error';
import styled, { css } from '@refract-ui/sc';

export type TextInputType = {
  name: string;
  placeholder?: string | null;
  label?: string | null;
  required?: boolean;
  errorMessage?: string;
  id?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
};

const StyledInput = styled.input``;

const StyledTextContainer = styled.div`
  position: relative;

  ${StyledInput} {
    &[type='text'] {
      ${({ theme: { allColors, box } }) => css`
        all: unset;
        ${box.t('input')};
        font-size: 20px;
        color: ${allColors.green};
        box-sizing: border-box;
        text-align: left;
        background-color: ${allColors.neutral10};
        /* Slight padding offset to center relative to label */
        height: 60px;
        width: 100%;
        border-radius: 6px;
        transition:
          outline 0.05s ease-out,
          box-shadow 0.1s ease-out;
        border: 1px solid currentColor;

        &::placeholder {
          // update with theme
          color: gray;
        }

        &:hover {
          // hover styles here
        }

        &:focus,
        &:focus-within {
          // focus styles here
        }
      `}
    }
  }
`;

const FieldContainer = styled.div`
  position: relative;
`;

function TextInput({
    name,
    placeholder,
    onChange,
    onBlur,
    value,
    label = 'label',
    required = false,
    errorMessage,
    id
  }: TextInputType) {
  console.log("textInput", name)
  const [isFocused, setIsFocused] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>(value ?? '');

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(inputValue !== '');

      if (onBlur) {
        onBlur();
      }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const changeValue = e.target.value;
      setInputValue(changeValue);

      if (onChange) {
        onChange(changeValue);
      }
    };

    const requiredText = required ? (
      <>
        {label} <em>(Required)</em>
      </>
    ) : (
      label
    );
  return (
    <FieldContainer>
      <StyledTextContainer>
        <StyledInput
          id={id ?? `${name}-input`}
          name={name}
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </StyledTextContainer>
      <Error 
        id={id}
        label={label}
        errorMessage={errorMessage}
      />
    </FieldContainer>
  );
}

export default TextInput;
