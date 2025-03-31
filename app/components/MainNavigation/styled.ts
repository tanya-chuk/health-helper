import Link from 'next/link';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledLink = styled(Link)({
    background: '#f7f9fa',
    borderRadius: '8px',
    margin: '2px 0',
    padding: 10,
    '&.active': {
        background: '#d1e3fa',
    },
    '&:hover': {
        background: '#ecf0f4',
    }
});

export const StyledBox = styled(Box)({
    '&.mainBox': {
        display: 'flex',
        flexDirection: 'column',
    },
    '&.spacer': {
        height: '100%',
        background: '#f7f9fa',
        borderRadius: '8px',
        margin: '2px 0',
    },
});
