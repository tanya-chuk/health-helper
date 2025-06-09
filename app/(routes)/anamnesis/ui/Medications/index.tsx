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
import { Medication } from '@/app/types';
import { StyledBox, StyledTableRow } from './styled';

interface Props {
  list: Array<Medication>;
}

const formatDate = (timestamp: string) => {
  const date = new Date(timestamp);
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${month}.${year}`;
};

export const Medications = ({ list }: Props) => {
  if (!list.length) {
    return <Box>Нет данных</Box>;
  }

  return (
    <TableContainer component={Box}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Название</TableCell>
            <TableCell>Период</TableCell>
            <TableCell>Повод приема</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((item) => (
            <StyledTableRow key={item.id}>
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell>
                {item.periods.map((period) => (
                  <StyledBox key={period.id} className="period">
                    {formatDate(period.start)} –&nbsp;
                    {period.end ? formatDate(period.end) : 'н.в.'}
                  </StyledBox>
                ))}
              </TableCell>
              <TableCell>{item.cause}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
