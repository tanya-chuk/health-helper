'use client';
import React from 'react';
import { AppLayout } from '../../components/AppLayout';
import { Providers } from '../../providers';

export function ClientRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <AppLayout>{children}</AppLayout>
    </Providers>
  );
}
