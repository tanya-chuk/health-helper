import React from 'react';
import { Typography } from '@mui/material';
import { stringifyList } from '@/app/utils';
import { Allergies as Props } from '@/app/types';

export const Allergies = ({ household, drug }: Props) => {
  const householdAllergies = stringifyList(household);
  const drugAllergies = stringifyList(drug);

  return (
    <div>
      <Typography>Медикаментозные аллергены: {drugAllergies || '—'}</Typography>
      <Typography>Бытовые аллергены: {householdAllergies || '—'}</Typography>
    </div>
  );
};
