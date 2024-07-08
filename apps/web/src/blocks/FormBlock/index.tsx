/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import React, { useCallback, useMemo, useState } from 'react';
import { Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import type { FormBlockT as PayloadType } from '@mono/types/payload-types';
import FormWrapper from '@mono/ui/components/FormWrapper';
import RichText from '@mono/ui/components/primitives/RichText';
import Wrapper from '@mono/ui/components/Wrapper';
import CheckboxGroup from '@refract-ui/hook-fields/CheckboxGroup';
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

const InputWrapper = styled(FormWrapper)`
  ${({ theme: { allColors } }) => css`
    form {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      button {
        justify-self: center;
        width: 18rem;
        min-width: 40%;
      }
      .input {
        background-color: ${allColors.bg};
        color: ${allColors.subtle};
        &::placeholder {
          color: ${allColors.subtle};
        }
      }
    }
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

function FormBlock({ form: formProps, content }: FormBlockProps) {
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
        if (input?.blockType === 'textInput') {
          return (
            <Controller
              key={input?.textinput?.name}
              name={input?.textinput?.name || 'textInput'}
              rules={{ required: true }}
              render={({ field }) => (
                <TextInput
                  label={
                    input?.textinput?.required && input?.textinput?.label
                      ? `${input?.textinput?.label}*`
                      : input?.textinput?.label
                  }
                  placeholder={input?.textinput?.placeholder || undefined}
                  helpText={input?.textinput?.helpText}
                  id={input?.textinput?.name || undefined}
                  className="input"
                  {...field}
                />
              )}
            />
          );
        }
        if (input?.blockType === 'select' && input?.select?.selectOptions) {
          const selectOptions = [
            { id: 0, value: '', option: '', disabled: true },
            ...input.select.selectOptions
          ];
          return (
            <Controller
              key={input?.select?.name}
              name={input?.select?.name || 'select'}
              render={({ field }) => (
                <Select
                  label={
                    input?.select?.required && input?.select?.label
                      ? `${input?.select?.label}*`
                      : input?.select?.label
                  }
                  defaultValue=""
                  className="input"
                  {...field}
                >
                  {(selectOptions ?? []).map((option) => (
                    <option
                      key={option?.id}
                      value={option?.value || undefined}
                      disabled={option?.value === ''}
                    >
                      {option.option}
                    </option>
                  ))}
                </Select>
              )}
            />
          );
        }
        if (
          input?.blockType === 'checkbox' &&
          input?.checkbox?.checkboxOptions
        ) {
          const transformedOptions = input?.checkbox?.checkboxOptions.map(
            (option) => ({
              value: option.value,
              label: option.label
            })
          );
          return (
            <Controller
              key={input?.checkbox?.name}
              name={input?.checkbox?.name || 'checkbox'}
              render={({ field }) => (
                <CheckboxGroup
                  label={
                    input?.checkbox?.required && input?.checkbox?.label
                      ? `${input?.checkbox?.label}*`
                      : input?.checkbox?.label
                  }
                  options={transformedOptions}
                  {...field}
                />
              )}
            />
          );
        }
        if (input?.blockType === 'textArea') {
          return (
            <Controller
              key={input?.id}
              name={input?.name || 'textArea'}
              rules={{ required: true }}
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
                        ? `${input?.label}*`
                        : input?.label}
                    </label>
                    <TextArea
                      placeholder={input?.placeholder || undefined}
                      id={input?.name || 'textArea'}
                      maxLength={500}
                      onChange={handleChange}
                      className="input"
                      {...restField}
                    />
                    <span style={{ justifySelf: 'end' }}>{textLength}/500</span>
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
  }, [formProps]);

  return (
    <Section>
      <InnerWrapper>
        {content && <RichText {...content} />}
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
