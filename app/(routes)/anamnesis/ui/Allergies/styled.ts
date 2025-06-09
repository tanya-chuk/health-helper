import { Box, Chip, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(({ theme: { spacing } }) => ({
  '&.allergies': {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing(2.5),
  },
}));

export const StyledChip = styled(Chip)(({ theme: { spacing, palette } }) => ({
  borderRadius: '16px',
  background: palette.primary.light,
  padding: `${spacing(1)} ${spacing(0.5)}`,
  textTransform: 'lowercase',
}));

export const StyledStack = styled(Stack)(({ theme: { spacing } }) => ({
  paddingTop: spacing(1),
  flexWrap: 'wrap',
  gap: `${spacing(0.75)} ${spacing(0.5)}`,
}));

export const StyledTypography = styled(Typography)(
  ({ theme: { spacing, palette } }) => ({
    paddingLeft: spacing(1),
    color: palette.text.disabled,
  }),
);
