import type { FieldHook } from 'payload/types';

const format = (val: string): string =>
  val
    .replace(/ /g, '-')
    .replace(/^[^\w-]+/, '')
    .toLowerCase();

const formatSlug =
  (fallback: string): FieldHook =>
  ({ value, originalDoc, data }) => {
    const fallbackData =
      (data && data[fallback]) || (originalDoc && originalDoc[fallback]);

    if (fallbackData === 'Home') {
      return '/';
    }

    if (typeof value === 'string') {
      return format(value.replace(/^\//, ''));
    }

    if (fallbackData && typeof fallbackData === 'string') {
      return format(fallbackData.replace(/^\//, ''));
    }

    return value;
  };

export default formatSlug;
