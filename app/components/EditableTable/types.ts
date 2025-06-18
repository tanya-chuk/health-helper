import { SxProps } from '@mui/material';
import { HTMLInputTypeAttribute } from 'react';
import { DefaultValues } from 'react-hook-form';

export type InputType =
  | Extract<HTMLInputTypeAttribute, 'text' | 'number'>
  | 'select';

export type InputValue = 'string' | 'number';

export type TableColumn<T extends string> = {
  id: T;
  name: string;
  input: InputType;
  type: InputValue;
  required?: boolean;
  styles?: SxProps;
};

export type TableProps<T extends object> = {
  columns: Array<TableColumn<Extract<keyof T, string>>>;
  rows: Array<Array<string>>;
  defaultValues: DefaultValues<T>;
  submitData: (params: T) => Promise<unknown>;
  onError?: (args?: unknown) => void;
};
