'use client';

import React from 'react';
import { DateTime } from 'luxon';

import type { PayloadDateProps } from '../types/PayloadDate';

function PayloadDate({ input, format }: PayloadDateProps) {
  if (!input) {
    return null;
  }
  return (
    <span>{DateTime.fromISO(input).toFormat(format ?? 'dd mm yyyy')}</span>
  );
}

export default PayloadDate;
