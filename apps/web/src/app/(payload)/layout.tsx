import React from 'react';

export const metadata = {
  title: 'Payload Admin',
  description: 'Payload CMS Admin'
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
