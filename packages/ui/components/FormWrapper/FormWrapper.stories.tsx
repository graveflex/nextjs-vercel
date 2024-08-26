import CheckboxGroup from '@refract-ui/hook-fields/CheckboxGroup';
import FieldErrors from '@refract-ui/hook-fields/FieldErrors';
import Select from '@refract-ui/hook-fields/Select';
import TextInput from '@refract-ui/hook-fields/TextInput';
import s from '@refract-ui/sc';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

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

function FormFields() {
  const {
    formState: { errors }
  } = useFormContext();

  const selectOptions = [
    { value: '', label: 'Select option...', disabled: true },
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' }
  ];

  const checkboxOptions = [
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2' },
    { value: 'opt3', label: 'Option 3' },
    { value: 'opt4', label: 'Option 4' },
    { value: 'opt5', label: 'Option 5' }
  ];

  const Container = s.div`
  & > div { 
  margin-bottom: 1rem;
  }
  `;

  return (
    <Container>
      <Controller
        name="name"
        rules={{ required: true }}
        render={({ field }) => <TextInput label="Name" id="name" {...field} />}
      />
      {errors.name && errors.name.type === 'required' && (
        <FieldErrors id="name-error" error="This is required" />
      )}
      <Controller
        name="selectOption"
        rules={{ required: true }}
        render={({ field }) => (
          <Select
            label="Select Option"
            id="selectOption"
            {...field}
            defaultValue=""
          >
            {selectOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </Select>
        )}
      />
      {errors.selectOption && errors.selectOption.type === 'required' && (
        <FieldErrors id="selectOption-error" error="This is required" />
      )}
      <Controller
        name="checkboxGroup"
        rules={{ required: true }}
        render={({ field }) => (
          <CheckboxGroup
            label="Check all that apply"
            {...field}
            options={checkboxOptions}
          />
        )}
      />
      {errors.checkboxGroup && errors.checkboxGroup.type === 'required' && (
        <FieldErrors id="checkboxGroup-error" error="This is required" />
      )}
    </Container>
  );
}

export const Defaults: Story = {
  render: (args) => (
    <FormWrapper {...args}>
      <FormFields />
    </FormWrapper>
  ),
  args: {
    onSubmit: (data) => console.debug(data),
    cta: {
      link: {
        label: 'Submit'
      }
    }
  }
};
