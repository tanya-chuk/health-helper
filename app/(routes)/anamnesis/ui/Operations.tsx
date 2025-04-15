import React from 'react';
import { List, ListItem, Typography } from '@mui/material';
import { Operation } from '@/app/types';
interface Props {
  list: Array<Operation>;
}

const OperationRecord = ({ data }: { data: Operation }) => {
  return (
    <ListItem>
      <Typography>{data.year}:&nbsp;</Typography>
      <Typography>{data.case}</Typography>
    </ListItem>
  );
};

export const Operations = ({ list }: Props) => {
  return (
    <List>
      {list.map((item) => (
        <OperationRecord key={item.id} data={item} />
      ))}
    </List>
  );
};
