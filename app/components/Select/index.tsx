import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { MenuItem } from '@mui/material';

export type SelectOption = {
  value: string | number;
  name: string | number;
};

type Props = TextFieldProps & {
  options: Array<SelectOption>;
};

export const Select = ({ options, ...props }: Props) => {
  return (
    <TextField select fullWidth variant="standard" {...props}>
      {options.map((option, i) => (
        <MenuItem key={String(option.name) + i} value={option.value}>
          {option.name}
        </MenuItem>
      ))}
    </TextField>
  );
};
