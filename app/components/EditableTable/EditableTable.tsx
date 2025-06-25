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
import { TableProps as Props } from './types';
import { EmptyTable } from './EmptyTable';
import { FormControls } from './FormControls';
import { useEditableTable } from './useEditableTable';
import { StyledTableRow } from './styled';

export function EditableTable<T extends object>({
  columns,
  rows,
  defaultValues,
  submitData,
  onError,
}: Props<T>) {
  const {
    isEditing,
    formState: { isValid },
    handleSubmit,
    onSubmit,
    handleAbort,
    openEditForm,
    renderInput,
    renderCell,
    getHeaderCellProps,
  } = useEditableTable({ defaultValues, submitData, onError });

  if (!rows.length) {
    return <EmptyTable onEdit={openEditForm} />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TableContainer component={Box}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <StyledTableRow key={String(row) + i}>
                {row.map((cell) => renderCell(cell, !!i))}
              </StyledTableRow>
            ))}
            {isEditing && (
              <StyledTableRow>
                {columns.map((column, i) => (
                  <TableCell key={column.id} {...getHeaderCellProps(!!i)}>
                    {renderInput(column)[column.input]}
                  </TableCell>
                ))}
              </StyledTableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <FormControls
        isEditing={isEditing}
        isValid={isValid}
        onAbort={handleAbort}
        onEdit={openEditForm}
      />
    </form>
  );
}
