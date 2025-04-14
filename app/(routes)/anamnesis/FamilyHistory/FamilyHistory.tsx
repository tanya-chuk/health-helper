import React from 'react';
import { List, ListItem, Typography } from '@mui/material';
import { FamilyHistoryRecord } from '@/app/types';

interface Props {
  list: Array<FamilyHistoryRecord>;
}

const Record = ({ data }: { data: FamilyHistoryRecord }) => {
  return (
    <ListItem sx={{ display: 'block' }}>
      <Typography>
        {data.person}: {data.case.toLowerCase()}
      </Typography>
      <Typography>{data.notes}</Typography>
    </ListItem>
  );
};

export const FamilyHistory = ({ list }: Props) => {
  return (
    <List>
      {list.map((item, i) => (
        <Record key={i} data={item} />
      ))}
    </List>
  );
};
