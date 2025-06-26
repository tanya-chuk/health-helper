'use client';
import React from 'react';
import { Path, Controller, Control } from 'react-hook-form';
import { RangeDatePicker } from '@/app/components';
import { TableColumn } from '../types';

interface Props<T extends object> {
  column: TableColumn<Extract<keyof T, string>>;
  control: Control<T>;
}

export function DateRangeInput<T extends object>({
  column,
  control,
}: Props<T>) {
  return (
    <Controller
      name={column.id as unknown as Path<T>}
      control={control}
      rules={{ required: column.required }}
      render={({ field }) => <RangeDatePicker {...field} />}
    />
  );
}
