import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const CapitalizedTypography = styled(Typography)({
  '&::first-letter': {
    textTransform: 'capitalize',
  },
});

export const UncapitalizedTypography = styled(Typography)({
  '&::first-letter': {
    textTransform: 'lowercase',
  },
});
