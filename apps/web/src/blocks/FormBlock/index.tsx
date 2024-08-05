/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import React, { useCallback, useMemo, useState } from 'react';
import { Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import type { FormBlockT as PayloadType } from '@mono/types/payload-types';
import FormWrapper from '@mono/ui/components/FormWrapper';
import RichText from '@mono/ui/components/primitives/RichText';
import Wrapper from '@mono/ui/components/Wrapper';
import InputGroup from '@refract-ui/hook-fields/InputGroup';
import Select from '@refract-ui/hook-fields/Select';
import TextInput from '@refract-ui/hook-fields/TextInput';
import styled, { css } from '@refract-ui/sc';

export type FormBlockProps = Omit<PayloadType, 'blockType'>;

export type Value = unknown;

export interface Property {
  [key: string]: Value;
}

export interface Data {
  [key: string]: Value | Property | Property[];
}

const Section = styled(Wrapper)``;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Content = styled(RichText)`
  padding-bottom: 1rem;

  ${({ theme: { mq } }) => css`
    ${mq.md`
      padding-bottom: 2.75rem;
    `}
  `}
`;

const InputWrapper = styled(FormWrapper)`
  ${({ theme: { allColors, box } }) => css`
    && {
      form {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        a {
          justify-self: center;
          width: 18rem;
          min-width: 40%;
        }
        label {
          ${box.t('pSmall')};
          color: ${allColors.color1} !important;
        }
        .input {
          background-color: transparent;
          color: ${allColors.color1};
          border-left: none;
          border-right: none;
          border-top: none;
          border-radius: 0;
          padding-left: 0;
          &::placeholder {
            ${box.t('pLarge')};
            color: ${allColors.color1};
          }
        }
      }
    }
    .textLength {
      color: ${allColors.color1};
    }
  `}
`;

const Required = styled.span`
  ${({ theme: { allColors } }) => css`
    color: ${allColors.red};
    padding: 0.25rem 0 0 0.25rem;
  `}
`;

const TextArea = styled.textarea`
  ${({ theme: { allColors } }) => css`
    resize: none;
    width: 100%;
    min-height: 8rem;
    padding: 0.5rem;
    background-color: ${allColors.bg};
  `}
`;

function FormBlock({ blockConfig, form: formProps, content }: FormBlockProps) {
  function isFormValid(
    form: unknown
  ): form is Exclude<typeof formProps, undefined | number> {
    return form !== undefined && typeof form !== 'number';
  }
  const {
    id: formID = 0,
    submitButtonLabel = '',
    confirmationType = '',
    redirect = undefined,
    confirmationMessage = ''
  } = isFormValid(formProps) ? formProps : {};

  const [isLoading, setIsLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>();
  const [error, setError] = useState<
    { status?: string; message: string } | undefined
  >();
  const router = useRouter();

  const requiredCopy = (label: string) => {
    return (
      <>
        {label}
        <Required>*</Required>
      </>
    );
  };

  const onSubmit = useCallback(
    (data: Data) => {
      let loadingTimerID: ReturnType<typeof setTimeout>;

      const submitForm = async () => {
        setError(undefined);

        if (!data?.data) {
          return;
        }

        const dataToSend = Object.entries(data.data)
          .filter(([, value]) => value !== undefined && value !== '')
          .map(([name, value]) => ({
            field: name,
            value
          }));

        // delay loading indicator by 1s
        loadingTimerID = setTimeout(() => {
          setIsLoading(true);
        }, 1000);

        try {
          const req = await fetch(`/api/form-submissions`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              form: formID,
              submissionData: dataToSend
            })
          });

          const res = await req.json();

          clearTimeout(loadingTimerID);

          if (req.status >= 400) {
            setIsLoading(false);
            setError({
              status: res.status,
              message: res.errors?.[0]?.message || 'Internal Server Error'
            });

            return;
          }

          setIsLoading(false);
          setHasSubmitted(true);

          if (confirmationType === 'redirect' && redirect) {
            const { url } = redirect;

            const redirectUrl = url;

            if (redirectUrl) {
              router.push(redirectUrl);
            }
          }
        } catch (err) {
          console.warn(err);
          setIsLoading(false);
          setError({
            message: 'Something went wrong.'
          });
        }
      };
      submitForm();
    },
    [router, formID, redirect, confirmationType]
  );

  const [textLength, setTextLength] = useState(0);

  const memoizedInputs = useMemo(() => {
    if (formProps && typeof formProps !== 'number' && formProps.fields) {
      return formProps.fields.map((input) => {
        if (input?.blockType === 'text') {
          const isEmailInput = input?.name === 'email';
          return (
            <Controller
              key={input?.name}
              name={input?.name || 'textInput'}
              rules={{
                required: input?.required || false,
                ...(isEmailInput && {
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Please enter a valid email address'
                  }
                })
              }}
              render={({ field }) => (
                <TextInput
                  label={
                    input?.required && input?.label
                      ? requiredCopy(input?.label)
                      : input?.label
                  }
                  placeholder={input?.defaultValue || undefined}
                  id={input?.name || undefined}
                  className="input"
                  {...field}
                />
              )}
            />
          );
        }
        if (input?.blockType === 'select' && input?.options) {
          const selectOptions = [
            { id: 0, value: '', label: '', disabled: true },
            ...input.options
          ];
          return (
            <Controller
              key={input?.name}
              name={input?.name || 'select'}
              rules={{ required: input?.required || false }}
              render={({ field }) => (
                <Select
                  label={
                    input?.required && input?.label
                      ? requiredCopy(input?.label)
                      : input?.label
                  }
                  defaultValue=""
                  className="input"
                  {...field}
                >
                  {(selectOptions ?? []).map((option) => {
                    const { id, value, label } = option;
                    return (
                      <option
                        key={id}
                        value={value || undefined}
                        disabled={value === ''}
                      >
                        {label}
                      </option>
                    );
                  })}
                </Select>
              )}
            />
          );
        }
        if (input?.blockType === 'textarea') {
          return (
            <Controller
              key={input?.id}
              name={input?.name || 'textArea'}
              rules={{ required: input?.required || false }}
              render={({ field }) => {
                const { onChange, ...restField } = field;

                const handleChange = (
                  e: React.ChangeEvent<HTMLTextAreaElement>
                ) => {
                  onChange(e);
                  setTextLength(e.target.value.length);
                };

                return (
                  <InputGroup>
                    <label>
                      {input?.required && input?.label
                        ? requiredCopy(input?.label)
                        : input?.label}
                    </label>
                    <TextArea
                      placeholder={input?.defaultValue || undefined}
                      id={input?.name || 'textArea'}
                      maxLength={500}
                      onChange={handleChange}
                      className="input"
                      {...restField}
                    />
                    <span className="textLength" style={{ justifySelf: 'end' }}>
                      {textLength}/200
                    </span>
                  </InputGroup>
                );
              }}
            />
          );
        }

        return null;
      });
    }
    return null;
  }, [formProps, textLength]);

  return (
    <Section {...blockConfig} hidden={blockConfig?.hidden ?? false}>
      <InnerWrapper>
        {content && <Content {...content} />}
        {!isLoading &&
          hasSubmitted &&
          confirmationType === 'message' &&
          confirmationMessage && <RichText {...confirmationMessage} />}
        {isLoading && !hasSubmitted && <p>Loading, please wait...</p>}
        {error && (
          <div>{`${error.status || '500'}: ${error.message || ''}`}</div>
        )}
        {!hasSubmitted && (
          <InputWrapper
            onSubmit={onSubmit}
            cta={{
              link: {
                type: 'internal',
                label: submitButtonLabel
              }
            }}
          >
            {memoizedInputs}
          </InputWrapper>
        )}
      </InnerWrapper>
    </Section>
  );
}

export default FormBlock;
