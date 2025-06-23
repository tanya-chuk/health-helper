'use client';
import React, { ReactNode } from 'react';
import { ru } from 'date-fns/locale';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { SessionProvider } from './SessionProvider';
import { SnackbarProvider } from './SnackbarProvider';
import { ThemeProvider } from './ThemeProvider';

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <SessionProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
          <SnackbarProvider>{children}</SnackbarProvider>
        </LocalizationProvider>
      </SessionProvider>
    </ThemeProvider>
  );
};
