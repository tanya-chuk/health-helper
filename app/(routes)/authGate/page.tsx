'use client';
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { AUTH_NEXT_URL } from '@/app/constants';

const AuthGate = observer(() => {
  const session = useSession();

  useEffect(() => {
    const nextUrl = localStorage.getItem(AUTH_NEXT_URL);

    if (session.status === 'unauthenticated') {
      window.location.reload();
      return;
    }

    if (nextUrl && session.status === 'authenticated') {
      localStorage.removeItem(AUTH_NEXT_URL);
      redirect(nextUrl);
    }
  }, [session.status]);

  return <></>;
});

export default AuthGate;
