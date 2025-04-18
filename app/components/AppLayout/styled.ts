import Link from 'next/link';
import { AppBar, Box, Button, Card, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const interactiveItemStyles = {
  height: '44px',
  background: '#f7f9fa',
  borderRadius: '6px',
  margin: '2px 0',
  padding: 10,
  '&.active': {
    background: '#d1e3fa',
  },
  '&:hover': {
    background: '#ecf0f4',
  },
};
export const StyledLink = styled(Link)({
  ...interactiveItemStyles,
  padding: 10,
});

export const StyledBox = styled(Box)({
  '&.contentLayout': {
    height: 'calc(100vh - 105px)',
    display: 'grid',
    gridTemplateColumns: '200px 1fr',
    gap: '10px',
    margin: '8px',
  },
  '&.mainBox': {
    display: 'flex',
    flexDirection: 'column',
  },
  '&.spacer': {
    flexGrow: 1,
    background: '#f7f9fa',
    borderRadius: '8px',
    margin: '2px 0',
  },
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

export const StyledButton = styled(Button)({
  ...interactiveItemStyles,
  width: '100%',
  fontSize: 'inherit',
  fontWeight: 'inherit',
  color: 'inherit',
  textTransform: 'none',
  justifyContent: 'flex-start',
});

export const StyledCard = styled(Card)({
  padding: '16px',
  overflow: 'auto',
});

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

export const StyledTypography = styled(Typography)({
  '&.logoTitle': {
    lineHeight: 1,
    fontWeight: 600,
    paddingLeft: 8,
  },
});
