'use client';
import React, { useActionState } from 'react';
import { Button } from '@mui/material';
import { authenticate } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/anamnesis';
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction}>
      <div>
        <div style={{ height: '36px', display: 'flex', gap: 15 }}>
          <label htmlFor="email" style={{ width: '80px' }}>
            Email
          </label>
          <div>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              style={{ width: '200px', borderBottom: '1px solid darkgrey' }}
            />
          </div>
        </div>
        <div style={{ height: '36px', display: 'flex', gap: 15 }}>
          <label htmlFor="password" style={{ width: '80px' }}>
            Password
          </label>
          <div>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter password"
              required
              minLength={6}
              style={{ width: '200px', borderBottom: '1px solid darkgrey' }}
            />
          </div>
        </div>
      </div>
      <input type="hidden" name="redirectTo" value={callbackUrl} />
      <Button
        aria-disabled={isPending}
        type="submit"
        variant="outlined"
        sx={{ marginTop: '15px', textTransform: 'none' }}
      >
        Войти
      </Button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
};
