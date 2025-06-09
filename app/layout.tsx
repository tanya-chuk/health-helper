import React from 'react';
import type { Metadata } from 'next';
import { Inter, Rubik } from 'next/font/google';
import { AppLayout } from './components/AppLayout';
import { Providers } from './providers';
import './globals.css';

const rubikSans = Rubik({
  variable: '--font-rubik',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
});

const interSans = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Health Helper',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${rubikSans.className} ${interSans.className} antialiased`}
      >
        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
}
