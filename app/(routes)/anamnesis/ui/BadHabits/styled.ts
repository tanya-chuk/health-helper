import { Box, List, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTypography = styled(Typography)(
  ({ theme: { palette, spacing } }) => ({
    '&.empty': {
      color: palette.text.disabled,
    },
    '&.habit': {
      paddingLeft: spacing(1),
    },
  }),
);

export const StyledBox = styled(Box)({
  '&.icon': {
    width: 35,
    display: 'flex',
    justifyContent: 'center',
  },
});

export const StyledList = styled(List)(({ theme: { spacing } }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing(1.5),
}));
