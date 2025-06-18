'use client';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  Box,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  TableCellProps,
} from '@mui/material';
import { useForm, SubmitHandler, Path } from 'react-hook-form';
import { YearSelect } from '@/app/components/YearSelect';
import { Plus } from '@/public/icons';
import { TableProps as Props } from './types';
import { StyledBox, StyledTableRow, StyledButton } from './styled';

export function EditableTable<T extends object>({
  columns,
  rows,
  defaultValues,
  submitData,
  onError,
}: Props<T>) {
  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { isValid },
  } = useForm<T>({
    mode: 'onChange',
    defaultValues,
  });

  if (!rows.length) {
    return <Box>Нет данных</Box>;
  }

  const onSubmit: SubmitHandler<T> = async (data) => {
    try {
      await submitData(data);
      reset(defaultValues);
      setIsEditing(false);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      if (onError) {
        onError();
      }
    }
  };

  const openEditForm = () => {
    setIsEditing(true);
  };

  const handleAbort = () => {
    setIsEditing(false);
    reset(defaultValues);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TableContainer component={Box}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={nanoid()}>{column.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <StyledTableRow key={nanoid()}>
                {row.map((rowItem) => {
                  const cellProps = i
                    ? {}
                    : {
                        component: 'th' as TableCellProps['component'],
                        scope: 'row',
                      };
                  return (
                    <TableCell key={nanoid()} {...cellProps}>
                      {rowItem}
                    </TableCell>
                  );
                })}
              </StyledTableRow>
            ))}
            {isEditing && (
              <StyledTableRow>
                {columns.map((column, i) => {
                  const cellProps = i
                    ? {}
                    : {
                        component: 'th' as TableCellProps['component'],
                        scope: 'row',
                      };

                  const renderInput = () => {
                    if (column.input === 'select') {
                      return (
                        <YearSelect
                          id={column.id}
                          value={watch(column.id as unknown as Path<T>)}
                          {...register(column.id as unknown as Path<T>, {
                            required: column.required,
                            valueAsNumber: Boolean(column.type === 'number'),
                          })}
                          sx={column.styles}
                        />
                      );
                    }
                    return (
                      <TextField
                        id={column.id}
                        type={column.type}
                        variant="standard"
                        sx={column.styles}
                        {...register(column.id as unknown as Path<T>, {
                          required: column.required,
                          valueAsNumber: Boolean(column.type === 'number'),
                        })}
                      />
                    );
                  };

                  return (
                    <TableCell key={nanoid()} {...cellProps}>
                      {renderInput()}
                    </TableCell>
                  );
                })}
              </StyledTableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <StyledBox className="formControls">
        {isEditing ? (
          <StyledBox className="buttonGroup">
            <StyledButton onClick={handleAbort}>Отменить</StyledButton>
            <StyledButton type="submit" disabled={!isValid}>
              Сохранить
            </StyledButton>
          </StyledBox>
        ) : (
          <StyledButton
            onClick={openEditForm}
            startIcon={<Plus width={22} height={22} />}
          >
            Добавить запись
          </StyledButton>
        )}
      </StyledBox>
    </form>
  );
}
