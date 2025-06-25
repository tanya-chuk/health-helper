'use client';
import React, { ReactNode, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  TableProps,
  InputType,
  TableColumn,
  isDateCell,
  isSelectCell,
  TableRowItem,
} from './types';
import { DateRangeInput, SelectInput, TextInput } from './inputs';
import { DateRangeCell, SelectCell, TextCell } from './cells';
import { TableCellProps } from '@mui/material';

type Props<T extends object> = Pick<
  TableProps<T>,
  'submitData' | 'onError' | 'defaultValues'
>;

export function useEditableTable<T extends object>({
  submitData,
  onError,
  defaultValues,
}: Props<T>) {
  const [isEditing, setIsEditing] = useState(false);

  const { control, register, reset, handleSubmit, formState, ...form } =
    useForm<T>({
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

  const getHeaderCellProps = (isHeader: boolean) => {
    if (!isHeader) {
      return {};
    }

    return {
      component: 'th' as TableCellProps['component'],
      scope: 'row',
    };
  };

  const renderInput: (
    column: TableColumn<Extract<keyof T, string>>,
  ) => Record<InputType, ReactNode> = (column) => {
    const baseProps = { column, control };

    return {
      date_range: <DateRangeInput<T> {...baseProps} />,
      select: <SelectInput<T> {...baseProps} />,
      text: <TextInput<T> {...baseProps} register={register} />,
      number: <TextInput<T> {...baseProps} register={register} />,
    };
  };

  const renderCell = (cell: TableRowItem, isHeaderCell: boolean) => {
    if (isDateCell(cell)) {
      return (
        <DateRangeCell
          key={cell.id}
          cell={cell}
          {...getHeaderCellProps(isHeaderCell)}
        />
      );
    }

    if (isSelectCell(cell)) {
      return (
        <SelectCell
          key={cell.id}
          cell={cell}
          {...getHeaderCellProps(isHeaderCell)}
        />
      );
    }

    return (
      <TextCell
        key={String(cell)}
        cell={cell}
        {...getHeaderCellProps(isHeaderCell)}
      />
    );
  };

  return {
    control,
    register,
    formState,
    isEditing,
    handleSubmit,
    onSubmit,
    handleAbort,
    openEditForm,
    renderInput,
    renderCell,
    getHeaderCellProps,
    ...form,
  };
}
