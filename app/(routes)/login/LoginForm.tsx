'use client';
import React, { useActionState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { authenticate } from '@/app/lib/actions';
import { AUTH_GATE_URL, AUTH_NEXT_URL } from '@/app/constants';
import { useSearchParams } from 'next/navigation';

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/anamnesis';
  localStorage.setItem(AUTH_NEXT_URL, callbackUrl);

  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <Box component="form" action={formAction}>
      <Box
        sx={{
          width: '250px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        <TextField
          required
          id="email"
          type="email"
          name="email"
          label="Email"
          placeholder="Enter your email address"
        />
        <TextField
          required
          id="password"
          type="password"
          name="password"
          label="Password"
          placeholder="Enter password"
          slotProps={{ htmlInput: { minLength: 6 } }}
        />
      </Box>
      <TextField hidden type="hidden" name="redirectTo" value={AUTH_GATE_URL} />
      {errorMessage && <Typography>{errorMessage}</Typography>}
      <Button
        aria-disabled={isPending}
        type="submit"
        variant="outlined"
        sx={{ marginTop: '15px', textTransform: 'none' }}
      >
        Войти
      </Button>
    </Box>
  );
};
