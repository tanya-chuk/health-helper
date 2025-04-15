import React from 'react';
import { Box, List, ListItem, Typography } from '@mui/material';
import { Illness } from '@/app/types';

interface Props {
  list: Array<Illness>;
}

const IllnessRecord = ({ data }: { data: Illness }) => {
  return (
    <ListItem sx={{ display: 'block' }}>
      <Box sx={{ display: 'flex' }}>
        <Typography>
          С {data.year} года ({data.age} лет):&nbsp;
        </Typography>
        <Typography>{data.case.toLowerCase()}.</Typography>
      </Box>
      <Typography>{data.notes}</Typography>
    </ListItem>
  );
};

export const ChronicIllness = ({ list }: Props) => {
  return (
    <List>
      {list.map((item) => (
        <IllnessRecord key={item.id} data={item} />
      ))}
    </List>
  );
};
