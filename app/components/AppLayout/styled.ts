import Link from 'next/link';
import { AppBar, Box, Button, Theme, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const interactiveItemStyles = ({ spacing, palette }: Theme) => ({
  height: 55,
  borderRadius: '12px',
  padding: `${spacing(1)} ${spacing(2)}`,
  margin: `${spacing(0.25)} 0`,
  alignContent: 'center',
  '&.active': {
    background: palette.primary.main,
  },
  '&:hover': {
    background: palette.primary.light,
  },
  '&:first-child': {
    marginTop: 0,
  },
});

export const StyledLink = styled(Link)(({ theme }) =>
  interactiveItemStyles(theme),
);

export const StyledButton = styled(Button)(({ theme }) => ({
  ...interactiveItemStyles(theme),
  width: '100%',
  fontSize: 'inherit',
  fontWeight: 'inherit',
  color: 'inherit',
  textTransform: 'none',
  justifyContent: 'flex-start',
}));

export const StyledBox = styled(Box)(({ theme: { spacing, palette } }) => ({
  '&.contentLayout': {
    background: palette.background.default,
    height: 'calc(100vh - 96px)',
    display: 'grid',
    gridTemplateColumns: '240px 1fr',
    gap: spacing(1),
    paddingLeft: spacing(3),
  },
  '&.navigation': {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: spacing(3),
  },
  '&.spacer': {
    flexGrow: 1,
    borderRadius: '8px',
    margin: `${spacing(0.25)} 0`,
  },
  '&.logoBlock': {
    height: 64,
    display: 'flex',
    alignItems: 'center',
  },
}));

export const ContentArea = styled('div')(({ theme: { spacing } }) => ({
  overflow: 'auto',
  padding: `${spacing(3)} ${spacing(2)}`,
  scrollbarGutter: 'stable',
}));

export const StyledAppBar = styled(AppBar)(
  ({ theme: { spacing, palette } }) => ({
    '&.MuiAppBar-root': {
      height: 96,
      width: 'auto',
      display: 'flex',
      padding: `${spacing(2)} ${spacing(3)}`,
      background: `linear-gradient(90deg, ${palette.background.default} 0%, ${palette.primary.dark} 100%)`,
      boxShadow: 'none',
    },
  }),
);

export const StyledTypography = styled(Typography)(
  ({ theme: { spacing, palette } }) => ({
    '&.logoTitle': {
      height: 60,
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'Rubik',
      lineHeight: 1.2,
      fontWeight: 500,
      fontSize: '26px',
      paddingLeft: spacing(2),
      color: palette.text.secondary,
      letterSpacing: '1.8px',
    },
  }),
);
