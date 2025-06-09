import React, { ReactNode } from 'react';
import { SessionProvider } from './SessionProvider';
import { ThemeProvider } from './ThemeProvider';

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
};
