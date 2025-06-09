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
import { FamilyHistoryRecord } from '@/app/types';
import { StyledTableRow } from './styled';

interface Props {
  list: Array<FamilyHistoryRecord>;
}

export const FamilyHistory = ({ list }: Props) => {
  if (!list.length) {
    return <Box>Нет данных</Box>;
  }

  return (
    <TableContainer component={Box}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Случай</TableCell>
            <TableCell>Родственник</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((item) => (
            <StyledTableRow key={item.id}>
              <TableCell>{item.case}</TableCell>
              <TableCell>{item.person}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
