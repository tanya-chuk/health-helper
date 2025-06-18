'use client';
import React, { ReactNode } from 'react';
import { observer } from 'mobx-react-lite';
import { Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Snackbar as SnackbarType } from '@/app/types';
import { useStores } from '@/app/stores/StoreContext';

const StyledAlert = styled(Alert)(({ theme: { spacing } }) => ({
  padding: `${spacing(1.5)} ${spacing(3)}`,
  width: '100%',
  borderRadius: '12px',
}));

export const SnackbarProvider = observer(
  ({ children }: { children: ReactNode }) => {
    const {
      snackbarStore: { snackbars, clearSnackbar },
    } = useStores();

    return (
      <>
        {children}
        {Object.values(snackbars).map((item: SnackbarType) => (
          <Snackbar
            key={item.name}
            open={item.open}
            autoHideDuration={item.duration}
            onClose={() => clearSnackbar(item.name)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          >
            <StyledAlert
              severity={item.severity}
              onClose={() => clearSnackbar(item.name)}
            >
              {item.message}
            </StyledAlert>
          </Snackbar>
        ))}
      </>
    );
  },
);
