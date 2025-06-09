import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(({ theme: { spacing } }) => ({
  '&.measureList': {
    display: 'flex',
    justifyContent: 'space-between',
  },
  '.measure': {
    display: 'flex',
    gap: spacing(1),
  },
}));
