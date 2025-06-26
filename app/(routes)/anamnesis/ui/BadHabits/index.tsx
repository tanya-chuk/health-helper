'use client';
import React from 'react';
import { ListItem } from '@mui/material';
import { BadHabits as Props } from '@/app/types';
import { Alcohol, Cigarette } from '@/public/icons';
import { StyledBox, StyledList, StyledTypography } from './styled';

export const BadHabits = ({ alcohol, smoking }: Props) => {
  const noHabits = !alcohol && !smoking;

  if (noHabits) {
    return <StyledTypography className="empty">Отсутствуют</StyledTypography>;
  }

  return (
    <StyledList>
      {
        <ListItem disablePadding>
          <StyledBox className="icon">
            <Alcohol width={30} height={28} />
          </StyledBox>
          <StyledTypography className="habit">
            Употребление алкоголя
          </StyledTypography>
        </ListItem>
      }
      {
        <ListItem disablePadding>
          <StyledBox className="icon">
            <Cigarette
              width={24}
              height={28}
              style={{ transform: 'rotate(30deg)' }}
            />
          </StyledBox>
          <StyledTypography className="habit">Курение</StyledTypography>
        </ListItem>
      }
    </StyledList>
  );
};
