'use client';
import React from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { PickerValue } from '@mui/x-date-pickers/internals';
import { StyledBox, StyledDatePicker } from './styled';

interface Props {
  value: ControllerRenderProps['value'];
  onChange: ControllerRenderProps['onChange'];
}

export type RangeDatePickerParts = 'start' | 'end';

export const PICKER_PARTS: Record<RangeDatePickerParts, number> = {
  start: 0,
  end: 1,
};

export const RangeDatePicker = ({ value, onChange }: Props) => {
  const handleChange = (e: PickerValue, part: RangeDatePickerParts) => {
    value[PICKER_PARTS[part]] = e;
    onChange(value);
  };

  return (
    <StyledBox>
      <StyledDatePicker
        openTo="month"
        views={['month', 'year']}
        label="Начало"
        format="MM.yyyy"
        value={value[0]}
        onChange={(e) => handleChange(e, 'start')}
      />
      <StyledDatePicker
        openTo="month"
        views={['month', 'year']}
        label="Конец"
        format="MM.yyyy"
        value={value[1]}
        onChange={(e) => handleChange(e, 'end')}
      />
    </StyledBox>
  );
};
