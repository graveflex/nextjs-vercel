'use client';
import type { Form } from '@mono/types/payload-types';
import RichText from '@mono/web/components/RichText/index';
import { Button } from '@mono/web/components/ui/Button';
import { Label } from '@mono/web/components/ui/Label';
import { cn } from '@mono/web/lib/utils';
import has from 'lodash/has';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import onSubmit from './Actions/onSubmit';
import fieldInputs from './fields';
import { fallbackConfirmationMessage } from './formMockData';

export type FormComponentTypes = {
  form?: Form;
};

export default function FormComponent({ form }: FormComponentTypes) {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const router = useRouter();
  const { pending: isPending } = useFormStatus();

  const formId = form?.id;
  const submitButtonLabel = form?.submitButtonLabel;
  const fields = form?.fields;
  const confirmationType = form?.confirmationType ?? 'message';
  const confirmationMessage =
    form?.confirmationMessage ?? fallbackConfirmationMessage;
  const redirectUrl = form?.redirect?.url;
  //   'use server';
  //   const entries = [];

  //   for (const pair of data.entries()) {
  //     entries.push(pair);
  //   }

  //   const dataToSend = entries.map(([name, value]) => ({
  //     field: name,
  //     value
  //   }));

  //   try {
  //     await fetch(`${WEB_URL}/api/form-submissions`, {
  //       body: JSON.stringify({
  //         form: formId,
  //         submissionData: dataToSend
  //       }),
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       method: 'POST'
  //     }).then(() => {
  //       setIsSubmitSuccessful(true);
  //       if (confirmationType === 'redirect' && redirectUrl) {
  //         if (redirectUrl) {
  //           router.push(redirectUrl);
  //         }
  //       }
  //     });
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };

  return (
    <div className="outer-form-wrapper">
      {isSubmitSuccessful && confirmationType === 'message' && (
        <RichText data={confirmationMessage} />
      )}
      {!isSubmitSuccessful && (
        <form
          id={`${formId}`}
          action={(formData) =>
            onSubmit({
              formData,
              formId
            }).then(() => {
              setIsSubmitSuccessful(true);
              if (confirmationType === 'redirect' && redirectUrl) {
                if (redirectUrl) {
                  router.push(redirectUrl);
                }
              }
            })
          }
          className="grid md:grid-cols-2 gap-3 w-full md:max-w-sm"
          aria-label="Email signup form"
        >
          {fields?.map((field) => {
            const defaultValue: string = has(field, 'defaultValue')
              ? (field.defaultValue as string)
              : '';

            const Field = fieldInputs?.[`${field.blockType}`];
            const isDropdown = field?.blockType === 'select';
            const blockName = field?.blockName ?? '';

            return (
              <div key={field.id} className="w-full">
                <Label htmlFor={field.name}>{field.label}</Label>
                <Field
                  type={field.blockType}
                  name={field.name}
                  placeholder={`${blockName}`}
                  defaultValue={defaultValue}
                  required={!!field.required}
                  className={cn('flex-1')}
                  options={isDropdown ? field?.options : null}
                  disabled={isPending}
                />
                {/* {errors?.[`${field.name}`] && (
                  <span className="text-red-500 text-xs">
                    {`* ${errors?.[`${field.name}`]?.message}`}
                  </span>
                )} */}
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
