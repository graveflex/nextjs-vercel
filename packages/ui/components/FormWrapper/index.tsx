import type { ReactNode } from 'react';
import React from 'react';
import type { FieldValues, SubmitHandler } from 'react-hook-form';
import { Form, FormProvider, useForm } from 'react-hook-form';
import type { CTAType } from '@mono/types/payload-types';
import CTAButton from '@mono/ui/components/CtaButton';
import s from '@refract-ui/sc';

export interface FormWrapperProps {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  cta: CTAType;
  className?: string;
}

const Container = s.div``;

function FormWrapper({ children, onSubmit, cta, className }: FormWrapperProps) {
  const methods = useForm();

  return (
    <Container className={className}>
      <FormProvider {...methods}>
        <Form onSubmit={onSubmit}>
          {children}
          {cta && <CTAButton cta={cta} submit />}
        </Form>
      </FormProvider>
    </Container>
  );
}

export default FormWrapper;
