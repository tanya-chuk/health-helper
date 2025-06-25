'use client';
import React, { useEffect, useState } from 'react';
import { DesktopDatePicker, DesktopDatePickerProps } from '@mui/x-date-pickers';
import { Calendar } from '@/public/icons';
import { TextField } from '@mui/material';

export const DatePicker = (props: DesktopDatePickerProps) => {
  const [cleared, setCleared] = useState<boolean>(false);

  useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [cleared]);

  return (
    <DesktopDatePicker
      slots={{
        openPickerIcon: () => <Calendar />,
        ...props.slots,
      }}
      slotProps={{
        textField: {
          size: 'small',
          variant: 'standard',
          ...(props.slotProps?.textField as React.ComponentProps<
            typeof TextField
          >),
        },
        field: {
          clearable: true,
          onClear: () => setCleared(true),
          ...props.slotProps?.field,
        },
        ...props.slotProps,
      }}
      {...props}
    />
  );
};
