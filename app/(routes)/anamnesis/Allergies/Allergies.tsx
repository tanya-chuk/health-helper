import React from 'react';
import { Typography } from '@mui/material';
import { stringifyList } from '@/app/utils';

interface Props {
  household: Array<string>;
  drug: Array<string>;
}

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
