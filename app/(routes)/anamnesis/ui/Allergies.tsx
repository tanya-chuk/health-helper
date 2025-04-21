import React from 'react';
import { Typography } from '@mui/material';
import { stringifyReaderFriendly } from '@/app/utils';
import { Allergies as Props } from '@/app/types';

export const Allergies = ({ household, drug }: Props) => {
  const householdAllergies = stringifyReaderFriendly(household);
  const drugAllergies = stringifyReaderFriendly(drug);

  return (
    <div>
      <Typography>Медикаментозные аллергены: {drugAllergies || '—'}</Typography>
      <Typography>Бытовые аллергены: {householdAllergies || '—'}</Typography>
    </div>
  );
};
