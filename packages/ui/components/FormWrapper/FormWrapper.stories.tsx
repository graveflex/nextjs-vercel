import React from 'react';
import { useForm } from 'react-hook-form';
import type { Meta, StoryObj } from '@storybook/react';

import type { FormWrapperProps } from '.';
import FormWrapper from '.';

const meta: Meta<FormWrapperProps> = {
  title: 'ui/FormWrapper',
  component: FormWrapper,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<FormWrapperProps>;

export const Default: Story = {
  render: (args) => {
    const {
      register,
      formState: { errors }
    } = useForm();

    return (
      <FormWrapper {...args}>
        <input
          id="name"
          aria-invalid={errors.name ? 'true' : 'false'}
          {...register('name', { required: true, maxLength: 30 })}
        />
      </FormWrapper>
    );
  },
  args: {
    onSubmit: (data) => console.log(data),
    cta: {
      children: 'submit',
      $color: 'primary'
    }
  }
};
