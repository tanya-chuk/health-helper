import React from 'react';
import { List, ListItem, Typography } from '@mui/material';
import { CapitalizedTypography } from '@/app/components/StyledTypography';

interface Medication {
  name: string;
  cause: string;
  periods: Array<{ start: number; end?: number }>;
}

interface Props {
  list: Array<Medication>;
}

const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);
  const month = Intl.DateTimeFormat('ru-RU', { month: 'long' }).format(date);
  const year = date.getFullYear();

  return `${month} ${year}`;
};

const Medication = ({ data }: { data: Medication }) => {
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
        <Medication key={i} data={item} />
      ))}
    </List>
  );
};
