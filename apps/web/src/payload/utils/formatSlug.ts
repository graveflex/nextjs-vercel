import kebabCase from 'lodash/kebabCase';
import type { FieldHook } from 'payload';

const format = (val: string): string => kebabCase(val);

const formatSlug =
  (fallback: string): FieldHook =>
  ({ value, originalDoc, data }) => {
    const fallbackData =
      (data && data[fallback]) || (originalDoc && originalDoc[fallback]);

    // If the fallback is 'Home' then return a forward slash
    if (fallbackData === 'Home') {
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
