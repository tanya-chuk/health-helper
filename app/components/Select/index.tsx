import React from 'react';
import { nanoid } from 'nanoid';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { MenuItem } from '@mui/material';

type Props = TextFieldProps & {
  options: Array<{
    value: string | number;
    name: string | number;
  }>;
};

export const Select = ({ options, ...props }: Props) => {
  return (
    <TextField select fullWidth variant="standard" {...props}>
      {options.map((option) => (
        <MenuItem key={nanoid()} value={option.value}>
          {option.name}
        </MenuItem>
      ))}
    </TextField>
  );
};
