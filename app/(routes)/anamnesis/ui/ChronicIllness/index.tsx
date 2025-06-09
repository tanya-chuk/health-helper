'use client';
import React from 'react';
import {
  Box,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import { Illness } from '@/app/types';
import { pluralizeAge } from '@/app/utils';
import { StyledTableRow } from './styled';

interface Props {
  list: Array<Illness>;
}

export const ChronicIllness = ({ list }: Props) => {
  if (!list.length) {
    return <Box>Нет данных</Box>;
  }

  return (
    <TableContainer component={Box}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Случай</TableCell>
            <TableCell>Год дебюта</TableCell>
            <TableCell>Возраст</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((item) => (
            <StyledTableRow key={item.id}>
              <TableCell component="th" scope="row">
                {item.case}
              </TableCell>
              <TableCell>{item.year}</TableCell>
              <TableCell>{pluralizeAge(item.age)}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
