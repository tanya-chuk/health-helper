import { TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTableRow = styled(TableRow)({
  '&:last-child td, &:last-child th': {
    border: 0,
  },
});
