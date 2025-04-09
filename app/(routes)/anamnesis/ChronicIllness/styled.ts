import { styled } from '@mui/material/styles';
import { ListItem } from '@mui/material';

export const StyledDiv = styled('div')({
  '&.description': {
    display: 'flex',
  },
});

export const StyledListItem = styled(ListItem)({
  display: 'block',
});
