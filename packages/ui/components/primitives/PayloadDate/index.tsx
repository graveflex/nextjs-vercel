'use client';

import { DateTime } from 'luxon';
import React from 'react';

export type PayloadDateProps = {
  input: string;
  format?: string;
};

function PayloadDate({ input, format }: PayloadDateProps) {
  if (!input) {
    return null;
  }
  return (
    <span>{DateTime.fromISO(input).toFormat(format ?? 'dd mm yyyy')}</span>
  );
}

export default PayloadDate;
