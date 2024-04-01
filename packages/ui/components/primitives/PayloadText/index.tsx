'use client';

import React from 'react';

import type { PayloadTextProps } from '../types/PayloadText';

function PayloadText({ content }: PayloadTextProps) {
  if (!content) {
    return null;
  }
  return <span>{content}</span>;
}

export default PayloadText;
