'use client';
import React, { useActionState } from 'react';
import Logo from '@/public/sparkles.svg';
import { Button } from '@mui/material';
import { logout } from '@/app/lib/actions';
import { StyledAppBar, StyledBox, StyledTypography } from './styled';

export const AppBar = () => {
  const [errorMessage, formAction] = useActionState(logout, undefined);

  return (
    <StyledAppBar position="static">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <StyledBox className="logoBlock">
          <Logo width={45} height={55} />
          <StyledTypography variant="h4" className="logoTitle">
            Health Helper
          </StyledTypography>
        </StyledBox>
        <form action={formAction}>
          <Button type="submit">Log out</Button>
          {errorMessage && <p>{errorMessage}</p>}
        </form>
      </div>
    </StyledAppBar>
  );
};
