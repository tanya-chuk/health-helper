import { AppBar, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAppBar = styled(AppBar)({
  '&.MuiAppBar-root': {
    height: 82,
    width: 'auto',
    display: 'flex',
    padding: '15px',
    margin: '6px',
    borderRadius: '8px',
    background: '#8cb4e9',
    boxShadow: 'none',
  },
});

export const StyledBox = styled(Box)({
  '&.logoBox': {
    height: 130,
    display: 'flex',
    alignItems: 'flex-end',
    padding: '10px',
    borderRadius: '8px',
    background: '#8cb4e9',
    color: 'white',
  },
  '&.logoBlock': {
    display: 'flex',
    alignItems: 'center',
  },
});

export const StyledTypography = styled(Typography)({
  '&.logoTitle': {
    lineHeight: 1,
    fontWeight: 600,
    paddingLeft: 8,
  },
});
