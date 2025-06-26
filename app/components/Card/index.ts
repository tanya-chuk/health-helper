import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardHeader as MuiCardHeader,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const Card = styled(MuiCard)(({ theme: { spacing } }) => ({
  padding: `${spacing(2)} ${spacing(3)}`,
  borderRadius: '12px',
  boxShadow: '0 4px 24px 0 rgba(37, 59, 119, 0.07)',
}));

export const CardHeader = styled(MuiCardHeader)(({ theme: { spacing } }) => ({
  padding: spacing(1),
}));

export const CardContent = styled(MuiCardContent)(({ theme: { spacing } }) => ({
  padding: spacing(1),
  '&:last-child': {
    paddingBottom: spacing(2),
  },
}));
