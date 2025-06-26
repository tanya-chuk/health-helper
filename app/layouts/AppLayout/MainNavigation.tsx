'use client';
import React, { useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';
import { routes } from '@/app/(routes)/routes';
import { Stack, Typography } from '@mui/material';
import { StyledBox, StyledLink } from './styled';
import { LogoutButton } from './LogoutButton';

const paths = {
  [routes.anamnesis]: {
    id: 'anamnesis',
    name: 'Анамнез',
    href: routes.anamnesis,
  },
  [routes.pastVisits]: {
    id: 'past-visits',
    name: 'Посещения',
    href: routes.pastVisits,
  },
  [routes.prescriptions]: {
    id: 'prescriptions',
    name: 'Назначения',
    href: routes.prescriptions,
  },
  [routes.analyzes]: {
    id: 'analyzes',
    name: 'Анализы',
    href: routes.analyzes,
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
        {Object.values(paths).map(({ id, name, href }) => {
          const isActive = currentPath === href;
          return (
            <StyledLink
              className={clsx(isActive && 'active')}
              href={href}
              key={id}
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
