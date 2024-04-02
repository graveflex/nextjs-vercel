'use client';

import React from 'react';

export type PayloadTextProps = {
  content: string;
};

function PayloadText({ content }: PayloadTextProps) {
  if (!content) {
    return null;
  }
  return <span>{content}</span>;
}

export default PayloadText;
