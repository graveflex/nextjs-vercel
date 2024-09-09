import { useTranslations } from 'next-intl';
import type React from 'react';

export default function FourOhFour() {
  // Using 404 content from translations rather than the cms
  const t = useTranslations('FourOhFour');

  const styles: React.CSSProperties = {
    alignContent: 'center',
    textAlign: 'center',
    display: 'grid',
    height: '100%'
  };

  return (
    <div style={styles}>
      <h1>{t('title')}</h1>
      <p>{t('content')}</p>
    </div>
  );
}
