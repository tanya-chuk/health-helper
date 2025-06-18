import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { MenuItem } from '@mui/material';
import { CURRENT_YEAR } from '@/app/constants';

const YEARS = Array.from(new Array(100), (val, index) => CURRENT_YEAR - index);

export const YearSelect = (props: TextFieldProps) => {
  return (
    <TextField select fullWidth variant="standard" {...props}>
      {YEARS.map((year) => (
        <MenuItem key={year} value={year}>
          {year}
        </MenuItem>
      ))}
    </TextField>
  );
};
