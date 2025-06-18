import React, { ReactNode } from 'react';
import { SessionProvider } from './SessionProvider';
import { SnackbarProvider } from './SnackbarProvider';
import { ThemeProvider } from './ThemeProvider';

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <SessionProvider>
        <SnackbarProvider>{children}</SnackbarProvider>
      </SessionProvider>
    </ThemeProvider>
  );
};
