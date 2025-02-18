'use client';
import type { Form } from '@mono/types/payload-types';
import RichText from '@mono/web/components/RichText/index';
import { Button } from '@mono/web/components/ui/Button';
import { Label } from '@mono/web/components/ui/Label';
import { WEB_URL } from '@mono/web/lib/constants';
import { cn } from '@mono/web/lib/utils';
import has from 'lodash/has';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { type SubmitHandler, useForm } from 'react-hook-form';
import fieldInputs from './fields';
import { fallbackConfirmationMessage } from './formMockData';

type Inputs = {
  [key: string]: string;
};

type FormComponentTypes = {
  form?: Form;
};

export default function FormComponent({ form }: FormComponentTypes) {
  const router = useRouter();

  const formId = form?.id;
  const submitButtonLabel = form?.submitButtonLabel;
  const fields = form?.fields;
  const confirmationType = form?.confirmationType ?? 'message';
  const confirmationMessage =
    form?.confirmationMessage ?? fallbackConfirmationMessage;
  const redirectUrl = form?.redirect?.url;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isLoading, isSubmitting },
    reset,
    control
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const dataToSend = Object.entries(data).map(([name, value]) => ({
      field: name,
      value
    }));

    try {
      await fetch(`${WEB_URL}/api/form-submissions`, {
        body: JSON.stringify({
          form: formId,
          submissionData: dataToSend
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }).then(() => {
        if (confirmationType === 'redirect' && redirectUrl) {
          if (redirectUrl) {
            router.push(redirectUrl);
          }
        }
        // Clear the form fields after successful submission:
        reset();
      });
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <div className="outer-form-wrapper">
      {isSubmitSuccessful && confirmationType === 'message' && (
        <RichText data={confirmationMessage} />
      )}
      {!isSubmitSuccessful && (
        <form
          id={`${formId}`}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col flex-wrap gap-3 w-full md:max-w-sm"
          aria-label="Email signup form"
          noValidate={true}
        >
          {fields?.map((field) => {
            const defaultValue: string = has(field, 'defaultValue')
              ? (field.defaultValue as string)
              : '';

            const Field = fieldInputs?.[`${field.blockType}`];
            const isDropdown = field?.blockType === 'select';

            return (
              <div key={field.id} className="flex-1">
                <Label htmlFor={field.name}>{field.label}</Label>
                <Field
                  type={field.blockType}
                  placeholder={`${field.label}`}
                  defaultValue={defaultValue}
                  required={!!field.required}
                  className={cn(
                    errors?.[`${field.name}`] && 'border-red-500',
                    'flex-1'
                  )}
                  options={isDropdown ? field?.options : null}
                  control={control}
                  disabled={isLoading || isSubmitting}
                  {...register(field.name, {
                    required: field?.required
                      ? `${field?.label} is required.`
                      : false
                  })}
                />
                {errors?.[`${field.name}`] && (
                  <span className="text-red-500 text-xs">
                    {`* ${errors?.[`${field.name}`]?.message}`}
                  </span>
                )}
              </div>
            );
          })}

          <Button type="submit">
            {submitButtonLabel}
            <ArrowRight />
          </Button>
        </form>
      )}
    </div>
  );
}
