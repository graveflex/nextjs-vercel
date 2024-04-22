import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { type LanguageLocale, LOCALES } from '@mono/settings';

interface GetRequestConfigProps {
  locale: string;
}

async function requestConfig({ locale }: GetRequestConfigProps) {
  // Validate that the incoming `locale` parameter is valid
  if (!LOCALES.includes(locale as LanguageLocale)) {
    notFound();
  }

  return {};
}

export default getRequestConfig(requestConfig) as unknown;
