import { Box, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTableRow = styled(TableRow)({
  verticalAlign: 'top',
  '&:last-child td, &:last-child th': {
    border: 0,
  },
});

export const StyledBox = styled(Box)({
  '&.period': {
    whiteSpace: 'nowrap',
  },
});
