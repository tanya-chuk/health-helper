'use client';
import React from 'react';
import { AppLayout } from '@/app/layouts';
import { Providers } from '@/app/providers';

export function ClientRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <AppLayout>{children}</AppLayout>
    </Providers>
  );
}
