import { Box, Card, CardContent, CardHeader } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCard = styled(Card)(({ theme: { spacing } }) => ({
  padding: `${spacing(2)} ${spacing(3)}`,
  borderRadius: '12px',
  boxShadow: '0 4px 24px 0 rgba(37, 59, 119, 0.07)',
}));

export const StyledCardHeader = styled(CardHeader)(
  ({ theme: { spacing } }) => ({
    padding: spacing(1),
  }),
);

export const StyledCardContent = styled(CardContent)(
  ({ theme: { spacing } }) => ({
    padding: spacing(1),
    '&:last-child': {
      paddingBottom: spacing(2),
    },
  }),
);

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
