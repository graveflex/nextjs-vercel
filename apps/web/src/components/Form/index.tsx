'use client';
import type { Form } from '@mono/types/payload-types';
import { Button } from '@mono/web/components/ui/Button';
import { Input } from '@mono/web/components/ui/Input';
import { Label } from '@mono/web/components/ui/Label';
// import { WEB_URL } from '@mono/web/lib/constants';
import has from 'lodash/has';
import { ArrowRight } from 'lucide-react';
import { Fragment } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  [key: string]: string;
};

type FormComponentTypes = {
  form?: Form;
};

export default function FormComponent({ form }: FormComponentTypes) {
  const formId = form?.id;
  const submitButtonLabel = form?.submitButtonLabel;
  const fields = form?.fields;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const dataToSend = Object.entries(data).map(([name, value]) => ({
      field: name,
      value
    }));

    try {
      await fetch(`http://localhost:3000/api/form-submissions`, {
        body: JSON.stringify({
          form: formId,
          submissionData: dataToSend
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }).then(() => {
        // Clear the form fields after successful submission:
        reset();
      });
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <form
      id={`${formId}`}
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col lg:flex-row gap-3 w-full md:max-w-sm"
      aria-label="Email signup form"
      noValidate={true}
    >
      {fields?.map((field) => {
        const defaultValue: string = has(field, 'defaultValue')
          ? (field.defaultValue as string)
          : '';
        return (
          <Fragment key={field.id}>
            <Label htmlFor={field.name}>{field.label}</Label>
            <Input
              type={field.blockType}
              placeholder={`${field.label}`}
              defaultValue={defaultValue}
              required={!!field.required}
              className={errors?.[`${field.name}`] && 'border-red-500'}
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
          </Fragment>
        );
      })}

      <Button type="submit">
        {submitButtonLabel}
        <ArrowRight />
      </Button>
    </form>
  );
}
