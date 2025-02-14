import { Input } from '@mono/web/components/ui/Input';
import { Textarea } from '@mono/web/components/ui/Textarea';

type fieldTypes = {
  text: typeof Input;
  email: typeof Input;
  select: typeof Input;
  textarea: typeof Textarea;
};

const fields: fieldTypes = {
  text: Input,
  email: Input,
  select: Input,
  textarea: Textarea
  // checkbox: Checkbox,
  // country: Country,
  // email: Email,
  // message: Message,
  // number: Number,
  // state: State,
};

export default fields;
