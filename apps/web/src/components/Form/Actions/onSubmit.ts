'use server';
import type { Form } from '@mono/types/payload-types';
import { WEB_URL } from '@mono/web/lib/constants';

type onSubmitTypes = {
  formData: FormData;
  formId?: Form['id'];
};

const onSubmit = async ({ formData, formId }: onSubmitTypes) => {
  'use server';
  const entries = [];

  for (const pair of formData.entries()) {
    entries.push(pair);
  }

  const dataToSend = entries.map(([name, value]) => ({
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
    });
  } catch (err) {
    console.warn(err);
  }
};

export default onSubmit;
