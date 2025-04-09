import React from 'react';
import { List, ListItem, Typography } from '@mui/material';

interface Operation {
  year: number;
  case: string;
}

interface Props {
  list: Array<Operation>;
}

const Operation = ({ data }: { data: Operation }) => {
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
      {list.map((item, i) => (
        <Operation key={i} data={item} />
      ))}
    </List>
  );
};
