import React from 'react';
import { List, ListItem, Typography } from '@mui/material';
import { CapitalizedTypography } from '@/app/components/StyledTypography';
import { Medication } from '@/app/types';

interface Props {
  list: Array<Medication>;
}

const formatDate = (timestamp: string) => {
  const date = new Date(timestamp);
  const month = Intl.DateTimeFormat('ru-RU', { month: 'long' }).format(date);
  const year = date.getFullYear();

  return `${month} ${year}`;
};

const MedicationRecord = ({ data }: { data: Medication }) => {
  return (
    <ListItem sx={{ display: 'block' }}>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Typography>{data.name}&nbsp;</Typography>
        <div style={{ display: 'block' }}>
          {data.periods.map((period, i) => (
            <CapitalizedTypography key={i}>
              {formatDate(period.start)} –&nbsp;
              {period.end ? formatDate(period.end) : 'н.в.'}
            </CapitalizedTypography>
          ))}
          <Typography sx={{ paddingTop: '6px' }}>
            Повод приема: {data.cause.toLowerCase()}
          </Typography>
        </div>
      </div>
    </ListItem>
  );
};

export const Medications = ({ list }: Props) => {
  return (
    <List>
      {list.map((item, i) => (
        <MedicationRecord key={i} data={item} />
      ))}
    </List>
  );
};
