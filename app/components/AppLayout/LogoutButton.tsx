'use client';
import React, { useActionState } from 'react';
import { observer } from 'mobx-react-lite';
import { Box } from '@mui/material';
import { useStores } from '@/app/stores/StoreContext';
import { logout } from '@/app/lib/actions';
import { SignOut } from '@/public/icons';
import { StyledButton } from './styled';

export const LogoutButton = observer(() => {
  const { patientStore } = useStores();
  const [errorMessage, formAction] = useActionState(logout, undefined);

  const handleStoreReset = () => {
    patientStore.resetStore();
  };

  return (
    <Box component="form" action={formAction} onSubmit={handleStoreReset}>
      <StyledButton
        type="submit"
        variant="text"
        startIcon={<SignOut width={24} />}
      >
        Выйти
      </StyledButton>
      {errorMessage && <p>{errorMessage}</p>}
    </Box>
  );
});
