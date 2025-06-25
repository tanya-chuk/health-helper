import React, { ChangeEvent } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { MenuItem } from '@mui/material';

export type SelectOption = {
  id: string;
  value: string | number;
  name: string | number;
};

type Props = TextFieldProps & {
  options: Array<SelectOption>;
  value: SelectOption;
  onChange: (e: SelectOption) => void;
};

export const Select = ({ options, value, onChange, ...props }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = options.find((o) => o.value === e.target.value);

    if (selected) {
      onChange(selected);
    }
  };

  return (
    <TextField
      select
      fullWidth
      variant="standard"
      value={value?.value || ''}
      onChange={handleChange}
      {...props}
    >
      {options.map((option) => (
        <MenuItem key={option.id} value={option.value}>
          {option.name}
        </MenuItem>
      ))}
    </TextField>
  );
};
