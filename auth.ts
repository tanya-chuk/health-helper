import { z } from 'zod';
import bcrypt from 'bcryptjs';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { Prisma, PrismaClient } from '@prisma/client';
import { Patient, User } from '@/app/types';
import { authConfig } from './auth.config';

const prisma = new PrismaClient();

async function getUser(email: string): Promise<Patient | null | undefined> {
  try {
    const patient = await prisma.patient.findFirst({
      where: { email },
    });
    return patient as unknown as Patient;
  } catch (err: unknown) {
    if (
      err instanceof Prisma.PrismaClientKnownRequestError &&
      err.code === 'P2025'
    ) {
      throw new Error('Пользователь не найден');
    }
  }
}

export const authOptions = {
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(6),
          })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) {
            return {
              id: user.id,
              email: user.email,
              name: user.name,
            } as User;
          }
        }

        return null;
      },
    }),
  ],
};

export const { auth, handlers, signIn, signOut } = NextAuth(authOptions);
