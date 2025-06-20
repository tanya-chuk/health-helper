'use client';
import React, { useState } from 'react';
import { useForm, SubmitHandler, Path, Controller } from 'react-hook-form';
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
import { Plus } from '@/public/icons';
import { TableProps as Props, isSelectOption } from './types';
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
                  const isSelectCell = isSelectOption(cell);
                  const cellKey = isSelectCell ? cell.id : String(cell) + i;
                  const cellName = isSelectCell ? cell.name : cell;

                  return (
                    <TableCell key={cellKey} {...getHeaderCellProps(i)}>
                      {cellName}
                    </TableCell>
                  );
                })}
              </StyledTableRow>
            ))}
            {isEditing && (
              <StyledTableRow>
                {columns.map((column, i) => {
                  const isNumericValue = Boolean(column.type === 'number');

                  const renderInput = () => {
                    if (column.input === 'select') {
                      return (
                        <Controller
                          name={column.id as unknown as Path<T>}
                          control={control}
                          rules={{ required: column.required }}
                          render={({ field }) => {
                            return (
                              <Select
                                {...field}
                                id={column.id}
                                options={column.options || []}
                                sx={column.styles}
                                value={field.value}
                                onChange={field.onChange}
                              />
                            );
                          }}
                        />
                      );
                    }

                    return (
                      <Controller
                        name={column.id as unknown as Path<T>}
                        control={control}
                        rules={{ required: column.required }}
                        render={({ field }) => {
                          return (
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
                          );
                        }}
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
