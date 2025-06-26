import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(({ theme: { spacing } }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing(2.5),
  '&.anamnesisContainer': {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing(4),
  },
  '&.leftColumn': {
    width: 650,
    minWidth: 500,
    maxWidth: 650,
  },
  '&.rightColumn': {
    width: 500,
    minWidth: 370,
    maxWidth: 500,
  },
}));
