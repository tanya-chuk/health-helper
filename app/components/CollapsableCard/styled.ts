import { styled } from '@mui/material/styles';
import { ChevronDown } from '@/public/icons';

export const StyledChevron = styled(ChevronDown)({
  '&.expanded': {
    transform: 'rotate(180deg)',
  },
});
