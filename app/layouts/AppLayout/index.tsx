'use client';
import React, { ReactNode } from 'react';
import { AppBar } from './AppBar';
import { MainNavigation } from './MainNavigation';
import { StyledBox, ContentArea } from './styled';

interface Props {
  children: ReactNode;
}

export const AppLayout = ({ children }: Props) => {
  return (
    <>
      <AppBar />
      <StyledBox className="contentLayout">
        <MainNavigation />
        <ContentArea>{children}</ContentArea>
      </StyledBox>
    </>
  );
};
