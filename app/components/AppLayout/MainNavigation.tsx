'use client';
import React, { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { nanoid } from 'nanoid';
import { usePathname } from 'next/navigation';
import { Stack, Typography } from '@mui/material';
import { StyledBox, StyledLink } from './styled';
import { LogoutButton } from './LogoutButton';

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

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <StyledBox className="navigation">
      <Stack>
        {Object.values(paths).map(({ name, href }) => {
          const isActive = currentPath === href;
          return (
            <StyledLink
              className={clsx(isActive && 'active')}
              href={href}
              key={nanoid()}
            >
              <Typography variant="subtitle1" component="p">
                {name}
              </Typography>
            </StyledLink>
          );
        })}
      </Stack>
      <StyledBox className="spacer" />
      <LogoutButton />
    </StyledBox>
  );
};
