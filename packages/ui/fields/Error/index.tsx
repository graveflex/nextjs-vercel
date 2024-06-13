'use client';

import React from 'react';
import FieldErrors from '@refract-ui/hook-fields/FieldErrors';
import s from '@refract-ui/sc';

export type ErrorProps = {
  errorMessage?: string | null;
  id?: string | null;
  label?: string | null;
};

const FieldErrorsStyled = s(FieldErrors)`
  position: absolute;
  right: 0;
  top: calc(100% + 0.5rem);
  > div {
    color: black;
  }

  && {
    padding: 0;
    background-color: transparent;
    border:none;
    grid-area: initial;
  }

`;

function Error({ errorMessage, id, label }: ErrorProps) {
  return (
    <FieldErrorsStyled
      id={id ?? `${label ?? ''}-error`}
      error={errorMessage ?? 'Error'}
    />
  );
}

export default Error;
