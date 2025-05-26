'use client';

import React, { ReactNode } from 'react';
import { SessionProvider as NextSessionProvider } from 'next-auth/react';

export function SessionProvider({ children }: { children: ReactNode }) {
  return <NextSessionProvider>{children}</NextSessionProvider>;
}
