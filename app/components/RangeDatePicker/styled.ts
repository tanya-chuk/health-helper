import { Box, styled } from '@mui/material';
import { DatePicker } from '@/app/components/DatePicker';

export const StyledBox = styled(Box)(({ theme: { spacing } }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing(2),
}));

export const StyledDatePicker = styled(DatePicker)(() => ({
  width: 165,
}));
