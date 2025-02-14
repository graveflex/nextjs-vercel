import { Input } from '@mono/web/components/ui/Input';
import { Textarea } from '@mono/web/components/ui/Textarea';
import SelectField from './Fields/SelectField';

type fieldTypes = {
  text: typeof Input;
  email: typeof Input;
  select: typeof SelectField;
  textarea: typeof Textarea;
  number: typeof Input;
};

const fields: fieldTypes = {
  text: Input,
  email: Input,
  select: SelectField,
  textarea: Textarea,
  number: Input
  // checkbox: Checkbox,
  // country: Country,
  // email: Email,
  // message: Message,
  // state: State,
};

export default fields;
