'use client';
import React, { useState } from 'react';
import { useForm, SubmitHandler, Path, Controller } from 'react-hook-form';
import { format } from 'date-fns';
import { Plus } from '@/public/icons';
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
import { Select } from '@/app/components/Select';
import { RangeDatePicker } from '@/app/components/RangeDatePicker';
import { TableProps as Props, isSelectCell, isDateCell } from './types';
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
    control,
    register,
    reset,
    handleSubmit,
    formState: { isValid },
  } = useForm<T>({
    mode: 'onChange',
    defaultValues,
  });

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

  const getHeaderCellProps = (i: number) => {
    if (i) {
      return {};
    }
    return {
      component: 'th' as TableCellProps['component'],
      scope: 'row',
    };
  };

  if (!rows.length) {
    return (
      <>
        <Box>Нет данных</Box>
        <StyledButton
          onClick={openEditForm}
          startIcon={<Plus width={22} height={22} />}
        >
          Добавить запись
        </StyledButton>
      </>
    );
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
                {row.map((cell) => {
                  if (isDateCell(cell)) {
                    return (
                      <TableCell
                        key={cell.id}
                        sx={{ whiteSpace: 'nowrap' }}
                        {...getHeaderCellProps(i)}
                      >
                        {format(new Date(cell.start), 'MM.yyyy')} –&nbsp;
                        {cell.end
                          ? format(new Date(cell.end), 'MM.yyyy')
                          : 'н.в.'}
                      </TableCell>
                    );
                  }

                  if (isSelectCell(cell)) {
                    return (
                      <TableCell key={cell.id} {...getHeaderCellProps(i)}>
                        {cell.name}
                      </TableCell>
                    );
                  }

                  return (
                    <TableCell
                      key={String(cell) + i}
                      {...getHeaderCellProps(i)}
                    >
                      {cell}
                    </TableCell>
                  );
                })}
              </StyledTableRow>
            ))}
            {isEditing && (
              <StyledTableRow className="editRow">
                {columns.map((column, i) => {
                  const isNumericValue = Boolean(column.type === 'number');

                  const renderInput = () => {
                    if (column.input === 'date') {
                      return (
                        <Controller
                          name={column.id as unknown as Path<T>}
                          control={control}
                          rules={{ required: column.required }}
                          render={({ field }) => <RangeDatePicker {...field} />}
                        />
                      );
                    }

                    if (column.input === 'select') {
                      return (
                        <Controller
                          name={column.id as unknown as Path<T>}
                          control={control}
                          rules={{ required: column.required }}
                          render={({ field }) => (
                            <Select
                              {...field}
                              id={column.id}
                              options={column.options || []}
                              sx={column.styles}
                              value={field.value}
                              onChange={field.onChange}
                            />
                          )}
                        />
                      );
                    }

                    return (
                      <Controller
                        name={column.id as unknown as Path<T>}
                        control={control}
                        rules={{ required: column.required }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            id={column.id}
                            type={column.type}
                            variant="standard"
                            sx={column.styles}
                            {...register(column.id as unknown as Path<T>, {
                              required: column.required,
                              valueAsNumber: isNumericValue,
                            })}
                          />
                        )}
                      />
                    );
                  };

                  return (
                    <TableCell key={column.id} {...getHeaderCellProps(i)}>
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
