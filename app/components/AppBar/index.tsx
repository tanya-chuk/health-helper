'use client';
import Logo from '@/public/sparkles.svg';
import { StyledAppBar, StyledBox, StyledTypography } from './styled';

export const AppBar = () => {
    return (
        <StyledAppBar position="static">
            <StyledBox className='logoBlock'>
                <Logo width={45} height={55} />
                <StyledTypography variant='h4' className='logoTitle'>Health Helper</StyledTypography>
            </StyledBox>
        </StyledAppBar>
    );
}