import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@mono/web/components/ui/Select';
import { Controller } from 'react-hook-form';

import type { SelectField as PayloadSelectFieldTypes } from '@payloadcms/plugin-form-builder/types';
import { useMemo } from 'react';
import type { Control, FieldErrorsImpl, FieldValues } from 'react-hook-form';

type SelectFieldTypes = {
  options?:
    | {
        label: string;
        value: string;
        id?: string | null;
      }[]
    | null;
  control: Control<FieldValues>;
} & Omit<PayloadSelectFieldTypes, 'options' | 'blockType'>;

const SelectField = ({
  options,
  name,
  defaultValue,
  control,
  required
}: SelectFieldTypes) => {
  const DropdownOptions = useMemo(() => {
    return (
      <SelectGroup>
        {options?.map((item) => {
          return (
            <SelectItem key={item?.id} value={item?.value}>
              {item?.label}
            </SelectItem>
          );
        })}
      </SelectGroup>
    );
  }, [options]);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{ required }}
      render={({ field }) => {
        return (
          <Select {...field} onValueChange={field.onChange}>
            <SelectTrigger>
              <SelectValue placeholder={`Select an item`} />
            </SelectTrigger>
            <SelectContent>{DropdownOptions}</SelectContent>
          </Select>
        );
      }}
    />
  );
};

export default SelectField;
