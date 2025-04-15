import React from 'react';
import { List, Typography } from '@mui/material';
import { Illness } from '@/app/types';
import { StyledDiv, StyledListItem } from './styled';

interface Props {
  list: Array<Illness>;
}

const IllnessRecord = ({ data }: { data: Illness }) => {
  return (
    <StyledListItem>
      <StyledDiv className="description">
        <Typography>
          С {data.year} года ({data.age} лет):&nbsp;
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
      {list.map((item) => (
        <IllnessRecord key={item.id} data={item} />
      ))}
    </List>
  );
};
