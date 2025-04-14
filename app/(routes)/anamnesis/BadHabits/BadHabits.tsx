import React from 'react';
import { List, ListItem, Typography } from '@mui/material';
import { BadHabits as Props } from '@/app/types';

export const BadHabits = ({ alcohol, smoking }: Props) => {
  const noHabits = !alcohol && !smoking;

  if (noHabits) {
    return <Typography>Отсутствуют</Typography>;
  }

  return (
    <List>
      {alcohol && <ListItem>Употребление алкоголя</ListItem>}
      {smoking && <ListItem>Курение</ListItem>}
    </List>
  );
};
