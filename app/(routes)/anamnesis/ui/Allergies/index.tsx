'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Allergies as Props } from '@/app/types';
import { StyledBox, StyledChip, StyledStack, StyledTypography } from './styled';

const renderAllergiesList = (title: string, list: Array<string>) => {
  return (
    <Box>
      <Typography>{title}:</Typography>
      {list?.length ? (
        <StyledStack className="list" direction="row" spacing={0.5} useFlexGap>
          {list.map((allergy, i) => (
            <StyledChip key={allergy + i} label={allergy} />
          ))}
        </StyledStack>
      ) : (
        <StyledTypography>—</StyledTypography>
      )}
    </Box>
  );
};
export const Allergies = ({ household, drug }: Props) => {
  return (
    <StyledBox className="allergies">
      {renderAllergiesList('Медикаментозные аллергены', drug)}
      {renderAllergiesList('Бытовые аллергены', household)}
    </StyledBox>
  );
};
