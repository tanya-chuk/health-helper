'use client';
import React from 'react';
import { Path, Controller, Control, UseFormRegister } from 'react-hook-form';
import { TextField } from '@mui/material';
import { TableColumn } from '../types';

interface Props<T extends object> {
  column: TableColumn<Extract<keyof T, string>>;
  control: Control<T>;
  register: UseFormRegister<T>;
}

export function TextInput<T extends object>({
  column,
  control,
  register,
}: Props<T>) {
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
            valueAsNumber: Boolean(column.type === 'number'),
          })}
        />
      )}
    />
  );
}
