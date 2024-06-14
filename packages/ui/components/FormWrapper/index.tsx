import type { ReactNode } from 'react';
import React from 'react';
import type { FieldValues, SubmitHandler } from 'react-hook-form';
import { Form, useForm } from 'react-hook-form';

import type { ButtonProps } from '../Button';
import Button from '../Button';

export interface FormWrapperProps {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  cta: ButtonProps;
}

function FormWrapper({ children, onSubmit, cta }: FormWrapperProps) {
  const { control } = useForm();
  return (
    <Form onSubmit={onSubmit} control={control}>
      {children}
      <Button {...cta} type="submit" element="button" />
    </Form>
  );
}

export default FormWrapper;
