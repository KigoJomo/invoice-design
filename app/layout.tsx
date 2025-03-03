import type { Metadata } from 'next';
import './globals.css';
import React from 'react';

export const metadata: Metadata = {
  title: 'Invoice - Jomo Kigo',
  description: 'Invoice for GuardCore Technologies',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'w-screen overflow-x-hidden'}>{children}</body>
    </html>
  );
}