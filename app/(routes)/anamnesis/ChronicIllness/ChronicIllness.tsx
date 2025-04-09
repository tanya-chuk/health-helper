import React from 'react';
import { List, Typography } from '@mui/material';
import { StyledDiv, StyledListItem } from './styled';

interface Illness {
  case: string;
  category: string;
  notes?: string;
  debut: {
    age: number;
    year: number;
  };
}

interface Props {
  list: Array<Illness>;
}

const Illness = ({ data }: { data: Illness }) => {
  return (
    <StyledListItem>
      <StyledDiv className="description">
        <Typography>
          С {data.debut.year} года ({data.debut.age} лет):&nbsp;
        </Typography>
        <Typography>{data.case.toLowerCase()}.</Typography>
      </StyledDiv>
      <Typography>{data.notes}</Typography>
    </StyledListItem>
  );
};

export const ChronicIllness = ({ list }: Props) => {
  return (
    <List>
      {list.map((item, i) => (
        <Illness key={i} data={item} />
      ))}
    </List>
  );
};
