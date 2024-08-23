import type { FieldHook } from 'payload';

const format = (val: string): string =>
  val
    .replace(/ /g, '-')
    .replace(/^[^\w-]+/, '')
    .replace(/--/g, '-')
    .toLowerCase();

const formatSlug =
  (fallback: string): FieldHook =>
  ({ value, originalDoc, data }) => {
    const fallbackData =
      (data && data[fallback]) || (originalDoc && originalDoc[fallback]);

    // If the fallback is 'Home' then return a forward slash
    if (fallbackData === 'Home' || fallbackData === 'Hogar') {
      return '/';
    }
    // remove forward slash from the beginning of the string
    if (typeof value === 'string') {
      return format(value.replace(/^\//, ''));
    }

    if (fallbackData && typeof fallbackData === 'string') {
      return format(fallbackData.replace(/^\//, ''));
    }

    return value;
  };

export default formatSlug;
