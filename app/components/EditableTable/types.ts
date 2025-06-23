import { SxProps } from '@mui/material';
import { HTMLInputTypeAttribute } from 'react';
import { DefaultValues } from 'react-hook-form';
import { SelectOption } from '../Select';

export type InputType =
  | Extract<HTMLInputTypeAttribute, 'text' | 'number' | 'date'>
  | 'select';

export type InputValue = 'string' | 'number';

export type TableColumn<T extends string> = {
  id: T;
  name: string;
  input: InputType;
  type: InputValue;
  required?: boolean;
  styles?: SxProps;
  options?: Array<SelectOption>;
};

export type DatePeriod = {
  id: string;
  start: string;
  end?: string;
};

export type TableRowItem = string | number | SelectOption | DatePeriod;

export type TableRow = Array<TableRowItem>;

export type TableProps<T extends object> = {
  columns: Array<TableColumn<Extract<keyof T, string>>>;
  rows: Array<TableRow>;
  defaultValues?: DefaultValues<T>;
  submitData: (params: T) => Promise<unknown>;
  onError?: (args?: unknown) => void;
};

export function isSelectCell(option: TableRowItem): option is SelectOption {
  return (
    (option as SelectOption).id !== undefined &&
    (option as SelectOption).value !== undefined
  );
}

export function isDateCell(value: TableRowItem): value is DatePeriod {
  return (value as DatePeriod).start !== undefined;
}
