'use server';
import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong while login';
      }
    }
    throw error;
  }
}

export async function logout() {
  try {
    await signOut({ redirect: true, redirectTo: '/login' });
  } catch (error) {
    if (error instanceof AuthError) {
      return 'Something went wrong while logout';
    }
    throw error;
  }
}
