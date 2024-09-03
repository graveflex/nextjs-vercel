import type { LanguageLocale } from '@mono/web/lib/constants';
import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  console.log('@-->locale', locale);
  console.log('@-->routing.locales', routing.locales);
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as LanguageLocale)) {
    notFound()
  };

  return {
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
