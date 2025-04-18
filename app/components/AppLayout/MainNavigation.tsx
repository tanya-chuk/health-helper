'use client';
import React, { useActionState, useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';
import { Stack } from '@mui/material';
import { logout } from '@/app/lib/actions';
import SignOut from '@/public/sign_out.svg';
import { StyledBox, StyledButton, StyledLink } from './styled';

const paths = {
  '/anamnesis': {
    id: 'anamnesis',
    name: 'Анамнез',
    href: '/anamnesis',
  },
  '/past-visits': {
    id: 'past-visits',
    name: 'Посещения',
    href: '/past-visits',
  },
  '/prescriptions': {
    id: 'prescriptions',
    name: 'Назначения',
    href: '/prescriptions',
  },
  '/analyzes': {
    id: 'analyzes',
    name: 'Анализы',
    href: '/analyzes',
  },
};

export const MainNavigation = () => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);
  const [errorMessage, formAction] = useActionState(logout, undefined);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <StyledBox className="mainBox">
      <StyledBox className="navigation">
        <Stack>
          {Object.values(paths).map(({ id, name, href }) => {
            const isActive = currentPath === href;
            return (
              <StyledLink
                className={clsx(isActive && 'active')}
                href={href}
                key={id}
              >
                {name}
              </StyledLink>
            );
          })}
        </Stack>
      </StyledBox>
      <StyledBox className="spacer" />
      <form action={formAction}>
        <StyledButton
          type="submit"
          variant="text"
          startIcon={<SignOut width={24} />}
        >
          Выйти
        </StyledButton>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </StyledBox>
  );
};
