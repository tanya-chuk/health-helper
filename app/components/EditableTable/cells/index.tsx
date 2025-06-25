'use client';
import React from 'react';
import { format } from 'date-fns';
import { TableCell, TableCellProps } from '@mui/material';
import { SelectOption } from '@/app/components/Select';
import { DatePeriod } from '../types';

interface TextCellProps extends TableCellProps {
  cell: string | number;
}

export const TextCell = ({ cell, ...props }: TextCellProps) => (
  <TableCell {...props}>{cell}</TableCell>
);

interface SelectCellProps extends TableCellProps {
  cell: SelectOption;
}

export const SelectCell = ({ cell, ...props }: SelectCellProps) => (
  <TableCell {...props}>{cell.name}</TableCell>
);

interface DateRangeCellProps extends TableCellProps {
  cell: DatePeriod;
}

export const DateRangeCell = ({ cell, ...props }: DateRangeCellProps) => (
  <TableCell sx={{ whiteSpace: 'nowrap' }} {...props}>
    {format(new Date(cell.start), 'MM.yyyy')} –&nbsp;
    {cell.end ? format(new Date(cell.end), 'MM.yyyy') : 'н.в.'}
  </TableCell>
);
