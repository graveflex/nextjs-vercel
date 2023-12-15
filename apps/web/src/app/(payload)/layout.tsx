import React from 'react';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js'
};

export default function PayloadLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
