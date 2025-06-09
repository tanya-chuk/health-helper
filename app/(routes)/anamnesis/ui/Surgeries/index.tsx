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
import { Operation } from '@/app/types';
import { StyledTableRow } from './styled';

interface Props {
  list: Array<Operation>;
}

export const Surgeries = ({ list }: Props) => {
  if (!list.length) {
    return <Box>Нет данных</Box>;
  }

  return (
    <TableContainer component={Box}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Год проведения</TableCell>
            <TableCell>Операция</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((item) => (
            <StyledTableRow key={item.id}>
              <TableCell>{item.year}</TableCell>
              <TableCell>{item.case}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
