'use client';
import React from 'react';
import { Logo } from '@/public/icons';
import { StyledAppBar, StyledBox, StyledTypography } from './styled';

export const AppBar = () => {
  return (
    <StyledAppBar position="static">
      <StyledBox className="logoBlock">
        <Logo width={64} height={64} />
        <StyledTypography variant="h4" className="logoTitle">
          Health <br />
          Helper
        </StyledTypography>
      </StyledBox>
    </StyledAppBar>
  );
};
