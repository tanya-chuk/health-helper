import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = Boolean(auth?.user);
      const isOnAnamnesis = nextUrl.pathname.startsWith('/');
      if (isOnAnamnesis) {
        return isLoggedIn;
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/anamnesis', nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
