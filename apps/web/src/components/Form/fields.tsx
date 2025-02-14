import { Input } from '@mono/web/components/ui/Input';
import { Select } from '@mono/web/components/ui/Select';
import { Textarea } from '@mono/web/components/ui/Textarea';
import SelectField from './Fields/SelectField';

type fieldTypes = {
  text: typeof Input;
  email: typeof Input;
  select: typeof SelectField;
  textarea: typeof Textarea;
};

const fields: fieldTypes = {
  text: Input,
  email: Input,
  select: SelectField,
  textarea: Textarea
  // checkbox: Checkbox,
  // country: Country,
  // email: Email,
  // message: Message,
  // number: Number,
  // state: State,
};

export default fields;
