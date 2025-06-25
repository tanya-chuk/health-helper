import { Box, Button, IconButton, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(({ theme: { spacing } }) => ({
  '&.measureList': {
    display: 'flex',
    justifyContent: 'space-between',
  },
  '&.measure': {
    display: 'flex',
    gap: spacing(1),
    alignItems: 'center',
  },
  '&.pressureField': {
    display: 'flex',
    alignItems: 'center',
  },
  '&.buttonGroup': {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: spacing(2),
    marginTop: spacing(2),
  },
}));

export const StyledIconButton = styled(IconButton)(
  ({ theme: { palette } }) => ({
    fill: palette.secondary.main,
    opacity: 0.25,
    '&:hover': {
      fill: palette.text.primary,
    },
  }),
);

export const StyledButton = styled(Button)(({ theme: { palette } }) => ({
  fontWeight: 400,
  textTransform: 'none',
  color: palette.secondary.main,
}));

export const StyledTextField = styled(TextField)(() => ({
  '& input': { textAlign: 'center' },
}));
