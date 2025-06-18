import { Box, Button, TableRow, styled } from '@mui/material';

export const StyledBox = styled(Box)(({ theme: { spacing } }) => ({
  '&.formControls': {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: spacing(1),
  },
  '&.buttonGroup': {
    display: 'flex',
    gap: spacing(2),
  },
}));

export const StyledTableRow = styled(TableRow)({
  '&:last-child td, &:last-child th': {
    border: 0,
  },
});

export const StyledButton = styled(Button)(({ theme: { palette } }) => ({
  fontWeight: 400,
  textTransform: 'none',
  color: palette.secondary.main,
  '& svg': {
    fill: palette.secondary.main,
  },
}));
